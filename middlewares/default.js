const helmet = require("helmet");
const cors = require("cors");
const express = require("express");
const basicAuth = require("express-basic-auth");

module.exports = server => {
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
