export async function welcome(request, reply) {
  reply
    .header("Content-Type", "text/html; charset=utf-8")
    .send(`<h1>Welcome to Fastify + Typescript App 🔥 </h1>`);
}

export async function hello(request, reply) {
  const obj = {
    hello: "world"
  };

  reply.type("application/json").send(obj);
}
