/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('order_info').del()
  await knex('order_info').insert([
    {
      id: 1,
      customer_id: 3,
      date_placed: "2024-03-5",
      date_shipped: "2024-03-06",
    }
  ]);
};
