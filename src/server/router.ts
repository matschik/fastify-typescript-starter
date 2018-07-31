import { welcome, hello } from "../handlers";

const routes = [];

export default function router(fastify, opts, next) {
  fastify.get("/", welcome);
  fastify.get("/api", hello);
  next();
}
