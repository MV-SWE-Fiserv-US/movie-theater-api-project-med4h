const express = require('express');
const app = express();
const port = 3000;
const app = require("./app")
const db = require("./db/connection");
const router = express.Router();



app.listen(port, () => {
    db.sync();
    console.log(`Listening at http://localhost:${port}/showRouter`);
})