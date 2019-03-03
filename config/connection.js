// Require Dependencies
// Set up MySQL connection.
var mysql = require("mysql");


// Setup MySQL Connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "yourRootPassword",
  database: "burgers_db"
});

// Make Connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
