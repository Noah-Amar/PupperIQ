
exports.up = function(knex, Promise) {
  return knex.schema.createTable('puppers', function(pups) {
    pups.increments();

    pups
      .string('name', 120)
      .notNullable();

    pups
      .binary('sheds')
      .defaultTo(1);

    pups
      .integer('playfulness')
      .notNullable();

    pups
      .integer('activity')
      .notNullable();

    pups
      .integer('affection')
      .notNullable();

    pups
      .integer('trainability')
      .notNullable();

    pups
      .integer('size')
      .notNullable();

    pups
      .binary('other_pets')
      .defaultTo(0);

    pups
      .integer('maintenance')
      .notNullable();

    pups
      .integer('climate')
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('puppers');
};
