declare module '@supabase/supabase-js' {
  export interface SupabaseInsertResponse {
    error: { message: string } | null;
    data?: { id: string }[];
  }
  export interface SupabaseClient {
    from(table: string): {
      insert(values: unknown): {
        select(column: string): { single(): Promise<SupabaseInsertResponse> };
      };
    };
  }
  export function createClient(url: string, key: string): SupabaseClient;
}

declare module 'idb-keyval' {
  export function get<T = unknown>(key: string): Promise<T | undefined>;
  export function set<T = unknown>(key: string, value: T): Promise<void>;
}
