import { Pool } from "pg";

interface Env {
  HYPERDRIVE: Hyperdrive;
}

export default {
  fetch: async (req, env) => {
    const pool = new Pool({ connectionString: env.HYPERDRIVE.connectionString });
    try {
      const result = await pool.query<{ value: number }>("select 1 as value;");
      return Response.json({ ok: true, value: result.rows[0]?.value ?? 1 });
    } catch (error) {
      return new Response("Database query failed", {
        status: 500,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    } finally {
      await pool.end();
    }
  }
} satisfies ExportedHandler<Env>;
