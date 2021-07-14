
exports.up = function(knex) {
  return knex.schema.createTable('inputs', table => {
    table.increments('id');
    table.string('title', 255).notNullable();
    table.timestamp('created').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('inputs')
};
