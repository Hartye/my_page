const NewComment = require("../model/comment");

module.exports = {
  dashboard(req, res) {
    return res.render("dashboard");
  },
  about(req, res) {
    return res.render("about");
  },
  contact(req, res) {
    return res.render("contact");
  },
  submit(req, res) {
    NewComment.create(req.body);
    return res.render("contact");
  },
};
