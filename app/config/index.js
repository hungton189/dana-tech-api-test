const config = {
  database: {
    connection: process.env.DATABASE_URL,
  },
  api: {
    host: "0.0.0.0",
    port: 3000,
  },
  jwt: {
    secretKey: "secretKey123",
  },
  sendgrid: {
    secretKey: null,
    fromEmail: null,
  },
  webClient: {
    url: "http://localhost:3000",
  },
};

module.exports = config;
