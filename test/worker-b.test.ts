import { exports } from "cloudflare:workers";
import { describe, expect, it } from "vitest";


declare module "cloudflare:workers" {
  namespace Cloudflare {
    interface Exports {
      default: Fetcher
    }
  }
}

describe("worker-b database behavior", () => {
  it("runs select 1 through worker fetch against local Hyperdrive", async () => {
    const response = await exports.default.fetch("http://example.com/");
    expect(response.status).toBe(200);

    const payload = (await response.json()) as { ok: boolean; value: number };

    expect(payload).toEqual({ ok: true, value: 1 });
  });
});
