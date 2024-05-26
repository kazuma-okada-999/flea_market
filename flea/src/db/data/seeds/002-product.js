/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("product").del();
  await knex("product").insert([
    {
      id: 1,
      item: "Nike Air Jordan 1",
      description: "ほぼ新品のスニーカーです！",
      sell_price: 160000,
      stock: 1,
    },
    {
      id: 2,
      item: "Switch 不思議のダンジョン 風来のシレン",
      description:
        "「Switch 不思議のダンジョン 風来のシレン6 とぐろ島探検録」です！",
      sell_price: 4000,
      stock: 1,
    },
    {
      id: 3,
      item: "ルギア　ぬいぐるみ",
      description: "ルギアのぬいぐるみです。ポケモンセンターにて購入。",
      sell_price: 1300,
      stock: 1,
    },
  ]);
};
