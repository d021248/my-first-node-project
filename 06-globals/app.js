// Let's try to print the value of __filename
console.log(__filename);

// Let's try to print the value of __dirname
console.log(__dirname);

// timeout
function printHello() {
  console.log("Hello, World!");
}

// Now call above function after 2 seconds
setTimeout(printHello, 2000);

// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);

// Now clear the timer
clearTimeout(t);

// Now call above function after 2 seconds
setInterval(printHello, 2000);
