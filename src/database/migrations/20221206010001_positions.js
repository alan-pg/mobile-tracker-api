/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("positions", function (table) {
    table.increments("id");
    table.string("device_id");
    table.string("lat", 255).notNullable();
    table.string("lon", 255).notNullable();
    table.string("speed", 255).notNullable();
    table.string("direction", 255).notNullable();
    table.string("type", 255).notNullable();
    table.boolean("mem", 255).notNullable();
    table.datetime("date", 255).notNullable();
    table.datetime("created_at", 255).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("positions");
};
