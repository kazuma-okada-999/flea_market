/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("customer", function (table) {
        table.increments("id").primary(); // Set this column as the primary key
        table
          .string("email", 32)
          .unique() // This is a constraint that prevents duplicate emails in the table
          .notNullable()
          .index(); // Adding an index makes searching by email faster
        table.string("first_name", 32).notNullable();
        table.string("last_name", 32).notNullable();
        table.string("postal_code", 16).notNullable();
        table.string("country", 32).notNullable();
        table.string("prefecture", 32).notNullable();
        table.string("city", 32).notNullable();
        table.string("town", 32).notNullable();
        table.string("block_name", 64).notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("customer");
};
