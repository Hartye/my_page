const Comment = require("../model/comment");

module.exports = {
  async subject(req, res) {
    return res.render("verify");
  },

  async verify(req, res) {
    if (req.body.password === "bonekinha") {
      const comments = await Comment.get();
      return res.render("viewComments", { comments });
    } else {
      return res.redirect("/");
    }
  },

  async delete(req, res) {
    const id = req.params.id;
    await Comment.delete(id);
    const comments = await Comment.get();
    return res.render("viewComments", { comments });
  },
};
