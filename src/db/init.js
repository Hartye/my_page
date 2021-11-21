const Database = require("./config");

const initDb = {
  async init() {
    const db = await Database();

    await db.exec(`
      CREATE TABLE comments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        content TEXT
      )
    `);

    await db.close();
  },
};

initDb.init();
