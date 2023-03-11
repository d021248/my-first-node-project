var fs = require("fs");

fs.readFile("xxx.txt", function (err, data) {
  if (err) return myError(err);
  myAction(data);
});

var myAction = function (data) {
  console.log("myAction");
  console.log(data.toString());
};

var myError = function (err) {
  console.log("myError");
  console.log(err);
};

console.log("Program Ended");
