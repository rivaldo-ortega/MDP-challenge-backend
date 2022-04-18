const pool = require('../db/queries.js');
const BadRequestError = require('../errors/bad-request.js');

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json({ users: results.rows });
  });
};

const createUser = (request, response) => {
  try {
    const { nombre, apellido, fecha_nacimiento } = request.body;
    if (!nombre || !apellido || !fecha_nacimiento) {
      throw new BadRequestError('Please provide all values');
    }
    pool.query(
      'INSERT INTO users (nombre, apellido,fecha_nacimiento) VALUES ($1, $2, $3)',
      [nombre, apellido, fecha_nacimiento],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(201).send(`User added with ID`);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const getAVG = (request, response) => {
  pool.query(
    'select avg(AGE(fecha_nacimiento)) as age_avg from users;',
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json({ avg: results.rows });
    }
  );
};

//export { getUsers, createUser };
module.exports = { getUsers, createUser, getAVG };
