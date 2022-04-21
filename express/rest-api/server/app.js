require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const user = require("./modules/user");

const express = require("express");
const app = express();

/* Middleware */
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* User API */
app.get("/user", user.getUserAll);
app.get("/user/:userId", user.getUser);
app.post("/user", user.postUser);
app.put("/user/:userId", user.putUser);
app.delete("/user/:userId", user.deleteUser);

module.exports = app;
