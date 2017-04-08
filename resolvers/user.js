const R = require('ramda');
const { getConnection } = require('../db/mdb');
const h = require('../db/helpers');

module.exports = (parent, args) => (
  getConnection()
  .then(h.selectCollection('users'))
  .then(h.find({ id: args.id }))
  .then(R.head)
);
