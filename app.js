const express = require("express");
const app = express();
const { User, Show } = require('./models/index');
const db = require("./db/connection");
const userRouter = require("./routes/userRouter");
const showRouter = require("./routes/showRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/userRouter", userRouter);
app.use("/showRouter", showRouter);

module.exports = app;

