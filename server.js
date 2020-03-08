// const { server } = require("./config"); <== CommonJS modules
import { server } from "./config"; // <== ES6 modules

// const { rootRouter } = require('./routes')
import { rootRouter } from "./routes";

// const registerMiddlwares = require("./middlewares");
import registerMiddlwares from "./middlewares";

async function main() {
  registerMiddlwares(server);

  server.use("/v1", rootRouter);

  server.listen();
}

main();
