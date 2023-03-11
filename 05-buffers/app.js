var buf;

buf = Buffer.alloc(32);
console.log(buf);

buf = Buffer.from([10, 20, 30, 40, 50]);
console.log(buf);

buf.write("new text");
console.log(buf);
console.log(buf.toString());

buf = new Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
  buf[i] = i + 97;
}

console.log(buf.toString("ascii")); // outputs: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString("ascii", 0, 5)); // outputs: abcde
console.log(buf.toString("utf8", 0, 5)); // outputs: abcde
console.log(buf.toString(undefined, 0, 5)); // encoding defaults to 'utf8',

console.log(buf.toJSON(buf));
