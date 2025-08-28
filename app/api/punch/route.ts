import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

interface Payload {
  employee_id: string;
  action: 'in' | 'out';
  job_code?: string;
  device_id?: string;
}

function isValid(data: unknown): data is Payload {
  if (!data || typeof data !== 'object') return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.employee_id === 'string' &&
    (d.action === 'in' || d.action === 'out') &&
    (d.job_code === undefined || typeof d.job_code === 'string') &&
    (d.device_id === undefined || typeof d.device_id === 'string')
  );
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!isValid(body)) {
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 });
  }
  const result = await supabase
    .from('punches')
    .insert({
      employee_id: body.employee_id,
      action: body.action,
      job_code: body.job_code ?? null,
      device_id: body.device_id ?? null,
      status: 'synced',
    })
    .select('id')
    .single();
  if (result.error || !result.data) {
    return NextResponse.json(
      { ok: false, error: result.error?.message ?? 'Unknown error' },
      { status: 500 },
    );
  }
  const id = (result.data as unknown as { id: string }).id;
  return NextResponse.json({ ok: true, id });
}
