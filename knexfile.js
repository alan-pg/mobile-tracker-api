require("dotenv").config();
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      database: process.env.PG_DB,
      user: process.env.PG_USER,
      password: process.env.PG_PW,
      host: process.env.PG_HOST,
      ssl: true,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "src/database/migrations",
      tableName: "knex_migrations",
    },
  },
};
