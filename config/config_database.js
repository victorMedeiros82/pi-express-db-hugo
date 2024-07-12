const pgp = require('pg-promise')(/* options */)

const BASE = 'exemplo_db';
const HOST = 'localhost';
const USER = 'postgres';
const PSWD = 'postgres';
const PORT = 5433;

// const db = pgp(`postgres://postgres:postgres@localhost:5432/exemplo_db`);
const db = pgp(`postgres://${USER}:${PSWD}@${HOST}:${PORT}/${BASE}`);

module.exports = db;