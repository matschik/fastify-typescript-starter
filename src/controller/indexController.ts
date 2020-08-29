import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { promises } from "fs";
import { resolve } from "path";

const { readFile } = promises;

export default async function indexController(fastify: FastifyInstance) {
  // GET /
  fastify.get("/", async function (
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    const indexHtmlPath = resolve(__dirname, "../../static/index.html");
    const indexHtmlContent = await readFile(indexHtmlPath);
    reply
      .header("Content-Type", "text/html; charset=utf-8")
      .send(indexHtmlContent);
  });
}
