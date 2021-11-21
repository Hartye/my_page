const { Router } = require("express");
const routes = Router();
const PagesController = require("./controller/pages");
const ViewComments = require("./controller/getComments");

routes.get("/", PagesController.dashboard);
routes.get("/about", PagesController.about);
routes.get("/contact", PagesController.contact);
routes.post("/contact", PagesController.submit);
routes.get("/comments", ViewComments.subject);

module.exports = routes;
