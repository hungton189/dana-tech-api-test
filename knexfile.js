"use strict";

const path = require("path");
const config = require("./app/config");

const BASE_PATH = path.join(__dirname, "app", "db");

module.exports = {
  development: {
    client: "postgres",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "hungton180915",
      database: "SmartphoneShop",
    },
    migrations: {
      directory: path.join(BASE_PATH, "migrations"),
    },
    seeds: {
      directory: path.join(BASE_PATH, "seeds"),
    },
  },
};
