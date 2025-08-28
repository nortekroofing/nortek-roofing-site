function assertEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing env var: ${name}`);
  }
  return value;
}

export const SUPABASE_URL = assertEnv('SUPABASE_URL');
export const SUPABASE_ANON_KEY = assertEnv('SUPABASE_ANON_KEY');
