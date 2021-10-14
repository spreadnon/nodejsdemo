var http = require("http");
var app = require("./module/route");

http.createServer(app).listen(8081);

console.log("Server running at http://127.0.0.1:8081/");

app.get("/login", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" });
  res.end("1");
});

app.get("/new", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" });
  res.end("2");
});

app.get("/logout", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" });
  res.end("3");
});
