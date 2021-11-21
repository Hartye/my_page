const Comment = require("../model/comment");

module.exports = {
  async subject(req, res) {
    const comments = await Comment.get();
    return res.render("viewComments", { comments });
  },
};
