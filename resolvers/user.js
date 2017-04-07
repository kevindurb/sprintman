const { getConnection } = require('../db/mdb');

module.exports = () => (
  getConnection()
  .then(() => ({ name: 'rawr' }))
);
