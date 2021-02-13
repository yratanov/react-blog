import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      post: Model,
    },

    seeds(server) {
      server.create("post", { title: "Post 1" });
      server.create("post", { title: "Post 2" });
    },

    routes() {
      this.namespace = "api";

      this.get("/posts", (schema) => {
        return schema.posts.all();
      });
    },
  });

  return server;
}