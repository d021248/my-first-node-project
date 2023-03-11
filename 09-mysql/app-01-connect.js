// include mysql module
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./09-mysql/mysqlite.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the mysqlite database.");
});

db.serialize(() => {
  db.each(
    `SELECT name FROM sqlite_master WHERE type='table' ORDER BY name`,
    (err, row) => {
      if (err) {
        console.error(err.message);
      }
      // console.log(row.id + "\t" + row.name);
      console.log(row);
    }
  );
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Close the database connection.");
});
