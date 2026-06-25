"use strict";

require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const port = 8081;

app.use(cors());
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});
