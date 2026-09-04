import mysql from "mysql2";

const database = mysql.createConnection({

  host: "127.0.0.1",

  port: 3306,

  user: "root",

  password: "root",

  database: "student_manager"

});

export default database;
