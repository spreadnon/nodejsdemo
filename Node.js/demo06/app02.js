const mkdirp = require("mkdirp");

mkdirp("./upload/aaa/xxx").then((made) =>
  console.log(`made directories, starting with ${made}`)
);
