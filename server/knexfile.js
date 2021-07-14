module.exports = {
  development: {
    client: "pg",
    connection: process.env.DB_CONNECTION_STRING,
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds/development",
    },
  },
};
