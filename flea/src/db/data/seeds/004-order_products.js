/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('order_product').del()
  await knex('order_product').insert([
    {
      product_id: 2,
      order_id: 1,
      quantity: 1
    },
  ]);
};
