
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
    tbl.increments()

    tbl
      .string('What need be done', 128)
      .notNullable();

    tbl
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects')

    tbl
      .integer('context_id')
      .unsigned()
      .references('id')
      .inTable('context')

    tbl
      .text('additonal info')

    tbl
      .boolean('complete')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
