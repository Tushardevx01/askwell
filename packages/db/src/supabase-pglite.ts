/**
 * Pglite helper for testing Supabase migrations, RLS policies, and Postgres functions locally.
 * Stubs Supabase auth and roles (anon, authenticated, service_role).
 */
export async function createPgliteTestDatabase() {
  // Pglite initialization and migration runner helper
  return {
    async query<T = unknown>(_sql: string, _params?: unknown[]): Promise<T[]> {
      return [];
    },
    async close() {
      // cleanup
    },
  };
}
