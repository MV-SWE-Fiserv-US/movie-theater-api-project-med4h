const express = require("express");
const app = express();
const { User, Show } = require('../models');
const db = require("../db/connection");
const router = require(express.Router());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/userRouter", router);
app.use("/showRouter", router);

module.exports = app;

