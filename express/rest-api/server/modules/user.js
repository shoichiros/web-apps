require("dotenv").config();
const mysql = require("mysql2");

/* DB settings */
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const getUserAll = (req, res) => {
  const query = "SELECT * FROM user";

  connection.query(query, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
};

const getUser = (req, res) => {
  const query = "SELECT * FROM user WHERE user_id = ?";
  const params = [req.params.userId];

  connection.query(query, params, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
};

const postUser = (req, res) => {
  const query = "INSERT INTO user (username, email) VALUES (?, ?)";
  const params = [req.body.username, req.body.email];

  connection.query(query, params, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
};

const putUser = (req, res) => {
  const query = "UPDATE user SET username = ?, email = ? WHERE user_id = ?";
  const params = [req.body.username, req.body.email, req.params.userId];

  connection.query(query, params, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
};

const deleteUser = (req, res) => {
  const query = "DELETE FROM user WHERE user_id = ?";
  const params = [req.params.userId];

  connection.query(query, params, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
};

module.exports = { getUserAll, getUser, postUser, putUser, deleteUser };
