
exports.up = function(knex, Promise) {
  return knex.schema.createTable('context', function(tbl) {
    tbl.increments();

    tbl
      .string('context', 128)
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('context');
};