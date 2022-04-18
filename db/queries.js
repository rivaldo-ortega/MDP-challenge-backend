/* import * as pg from 'pg';
const { Pool } = pg; */
const Pool = require('pg').Pool;
//import Pool  from ('pg').Pool;
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
});

//export default pool;
module.exports = pool;
