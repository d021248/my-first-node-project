// include mysql module
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./09-mysql/mysqlite.db");
const sql = `SELECT name FROM sqlite_master WHERE type='table' ORDER BY name`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.name);
  });
});

db.close();
