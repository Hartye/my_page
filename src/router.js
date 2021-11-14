const { Router } = require("express");
const routes = Router();

routes.get("/", (req, res) => res.render("dashboard"));
routes.get("/about", (req, res) => res.render("about"));
routes.get("/contact", (req, res) => res.render("contact"));

module.exports = routes;
