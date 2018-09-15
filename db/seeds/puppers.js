
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('puppers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('puppers').insert([
        {name: 'Fuzzy Lazy Pupper', sheds: 1, playfulness: 3, activity: 2, affection: 4, trainability: 3, size: 4, other_pets: 1, maintenance: 4, climate: 1},
        {name: 'Big Sleek Doggo', sheds: 1, playfulness: 2, activity: 5, affection: 2, trainability: 4, size: 4, other_pets: 0, maintenance: 1, climate: 4},
        {name: 'Tiny Yapper', sheds: 0, playfulness: 5, activity: 3, affection: 5, trainability: 2, size: 1, other_pets: 1, maintenance: 1, climate: 5},
      ]);
    });
};
