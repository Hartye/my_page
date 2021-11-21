const express = require("express");
const app = express();
const router = require("./router.js");
const { join } = require("path");

app.set("view engine", "ejs");

app.set("views", join(__dirname, "views"));

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(3000, () => console.log("Running \nPort: 3000"));
