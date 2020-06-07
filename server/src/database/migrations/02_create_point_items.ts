import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('point_items', table => {
    table.integer('point_id')
      .notNullable()
      .references('id') // FK
      .inTable('points');

    table.integer('item_id')
      .notNullable()
      .references('id') // FK
      .inTable('items');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('point_items');
}