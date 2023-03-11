const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database(":memory:");

db.serialize(() => {
  db.run("CREATE TABLE langs(name text)");

  let languages = ["C++", "Python", "Java", "C#", "Go", "C"];

  // construct the insert statement with multiple placeholders
  // based on the number of rows
  let placeholders = languages.map((language) => "(?)").join(",");
  let createSql = `INSERT INTO langs(name) VALUES ${placeholders}`;

  // output the INSERT statement
  console.log(createSql);

  db.run(createSql, languages, function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Rows inserted ${this.changes}`);
  });

  let data = ["Ansi C", "C"];
  let updateSql = `UPDATE langs SET name = ? WHERE name = ?`;
  db.run(updateSql, data, function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Row(s) updated: ${this.changes}`);
  });
});

// close the database connection
db.close();
