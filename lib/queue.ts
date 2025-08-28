import { get, set } from 'idb-keyval';
import type { SupabaseClient } from '@supabase/supabase-js';

export interface Punch {
  employee_id: string;
  action: 'in' | 'out';
  job_code?: string;
  device_id?: string;
  ts: string;
}

const KEY = 'punches-v1';

export async function addToQueue(punch: Punch): Promise<void> {
  const list = (await get<Punch[]>(KEY)) || [];
  list.push(punch);
  await set(KEY, list);
}

export async function queueSize(): Promise<number> {
  const list = (await get<Punch[]>(KEY)) || [];
  return list.length;
}

export async function flushQueue(client: SupabaseClient): Promise<number> {
  const list = (await get<Punch[]>(KEY)) || [];
  const remaining: Punch[] = [];
  for (const punch of list) {
    const { error } = await client
      .from('punches')
      .insert({
        employee_id: punch.employee_id,
        action: punch.action,
        job_code: punch.job_code ?? null,
        device_id: punch.device_id ?? null,
        created_at: punch.ts,
        status: 'synced',
      })
      .select('id')
      .single();
    if (error) {
      remaining.push(punch);
    }
  }
  await set(KEY, remaining);
  return remaining.length;
}
