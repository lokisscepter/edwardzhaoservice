const MySql = require('mysql');
const Promise = require('bluebird');

const connection = MySql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student'
})

const db = Promise.promisifyAll(connection, { multiArgs: true });

module.exports = db;