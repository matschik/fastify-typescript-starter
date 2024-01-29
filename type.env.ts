/**
 *
 * Simple configuration that enables type-safe reading of environment variables
 * & provides auto-completion support in VSCode.
 * Matt Pocock did a video explaining how you can implement this approach:
 * see https://www.youtube.com/watch?v=q1im-hMlKhM
 */

import z from "zod";

const envVariables = z.object({
  FASTIFY_PORT: z.string(),
  DATABASE_URL: z.string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
