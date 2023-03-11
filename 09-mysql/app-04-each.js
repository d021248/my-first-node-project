// include mysql module
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./09-mysql/mysqlite.db");
const sql = `SELECT name FROM sqlite_master WHERE type=? ORDER BY name`;

const tableType = `view`;

db.each(sql, [tableType], (err, row) => {
  if (err) {
    throw err;
  }
  return row
    ? console.log(row.name)
    : console.log(`No table found with the id ${name}`);
});

db.close();
