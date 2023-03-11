// include mysql module
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./09-mysql/mysqlite.db");
const sql = `SELECT name FROM sqlite_master WHERE type='table' AND name=? ORDER BY name`;

const name = `sap_odm_common_CountryCodes`;

db.get(sql, [name], (err, row) => {
  if (err) {
    throw err;
  }
  return row
    ? console.log(row.name)
    : console.log(`No table found with the id ${name}`);
});

db.close();
