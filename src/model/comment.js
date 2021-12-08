const Database = require("../db/config");

module.exports = {
  async get() {
    const db = await Database();

    const comments = await db.all(`SELECT * FROM comments`);

    await db.close();

    return comments;
  },

  async create(data) {
    const db = await Database();

    await db.run(
      `INSERT INTO comments (
        name, 
        content
      ) VALUES (
          "${data.name}", 
          "${data.subject}"
        )
    `
    );

    await db.close();
  },

  async delete(id) {
    const db = await Database();

    await db.run(`DELETE FROM comments WHERE id = ${id}`);

    await db.close();
  },
};
