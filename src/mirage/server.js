import { createServer, Factory, Model } from "miragejs";
import faker from 'faker';

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      post: Model
    },

    factories: {
      post: Factory.extend({
        title() {
          return faker.lorem.sentence();
        },
        createdAt() {
          return faker.date.recent(1);
        },
        text() {
          return faker.lorem.paragraph();
        },
      }),
    },
    seeds(server) {
      server.createList("post", 10);
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