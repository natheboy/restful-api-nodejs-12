import helmet from "helmet";
import cors from "cors";
import express from "express";
import basicAuth from "express-basic-auth";

export default server => {
  // apply cors
  server.use(cors());
  // apply http security headers
  server.use(helmet());
  // apply basic authentication - check req Authentication header
  server.use(
    basicAuth({
      users: {
        admin: "supersecret"
      },
      challenge: true
    })
  );
  // handle request JSON body - no need to use body-parser lib anymore
  server.use(express.json());
};
