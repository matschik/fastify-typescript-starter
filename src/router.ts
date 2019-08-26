import { welcome, hello } from "./handlers";

export default function router(fastify, opts, next) {
  fastify.get("/", welcome);
  fastify.get("/api", hello);
  next();
}
