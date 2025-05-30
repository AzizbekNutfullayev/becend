const { Pool } = require('pg');

const pool = new Pool({
  user: "network",
  host: "dpg-d0sr6eqli9vc73da5100-a.oregon-postgres.render.com",
  database: "network_ytvc",
  password: "iZFzoOYtFXktoGJTLAm4hTRHldci3fkD",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,  
  },
});

module.exports = pool;
