/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("order_product", function(table) {
        table.integer("product_id").unsigned().notNullable().references("id").inTable("product");
        table.integer("order_id").unsigned().notNullable().references("id").inTable("order_info");
        table.integer("quantity").notNullable();
        table.unique(["product_id", "order_id"], {
            indexName: "order_product_index",
        })
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("order_product");
};
