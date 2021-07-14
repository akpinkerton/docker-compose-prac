
exports.seed = function(knex) {
  return knex('inputs').del()
    .then(function () {
      return (
      knex('inputs').insert([
        { title: 'HELLO WORLD!'}
      ])
    )});
};
