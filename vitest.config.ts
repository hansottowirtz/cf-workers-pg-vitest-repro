import { defineConfig } from "vitest/config";
import { cloudflareTest } from "@cloudflare/vitest-pool-workers";

export default defineConfig({
  plugins: [
    cloudflareTest({
      wrangler: { configPath: "./wrangler.jsonc" },
    }),
  ],
  // test: {
  //   deps: {
  //     optimizer: {
  //       ssr: {
  //         rolldownOptions: {
  //           external: ['net', 'events', 'util', 'tls', 'path', 'fs', 'dns', 'crypto', 'stream', 'string_decoder']
  //         },
  //         enabled: true,
  //         include: ['pg'],
  //       }
  //     },
  //   }
  // }
});
