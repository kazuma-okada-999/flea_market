/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('customer').del()
  await knex('customer').insert([
    {
      id: 1,
      email: "kazuchanpower@example.com",
      first_name: "kazu",
      last_name: "chan",
      postal_code: "1110001",
      country: "japan",
      prefecture: "aichi",
      city: "nagoya",
      town: "mizuhoku",
      block_name: "1",
    },
    {
      id: 2,
      email: "okachanpower@example.com",
      first_name: "oka",
      last_name: "chan",
      postal_code: "2220002",
      country: "japan",
      prefecture: "aichi",
      city: "nagoya",
      town: "okaka",
      block_name: "2",
    },
    {
      id: 3,
      email: "maboroshi@example.com",
      first_name: "maboroshi",
      last_name: "san",
      postal_code: "3330003",
      country: "japan",
      prefecture: "aichi",
      city: "nagoya",
      town: "maboroshi",
      block_name: "3",
    }
  ]);
};
