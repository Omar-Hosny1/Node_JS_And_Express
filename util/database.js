const mysql = require("mysql2");

// pool have multiple connections so when u need to excute one query the pool will give u one connection to excute ur query
// and when the query done the connection will handed back to the pool to use it again in the next query
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  port: "3306",
});

module.exports = pool.promise();
