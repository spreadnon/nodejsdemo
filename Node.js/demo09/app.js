var http = require("http");
const fs = require("fs");
const common = require("./nodule/common");
const path = require("path");

http
  .createServer(function (request, response) {
    //1.获取地址
    console.log(request.url);
    let pathName = request.url;
    pathName = pathName == "/" ? "/index.html" : pathName;

    //获取后缀名 path.extname()
    let extname = path.extname(pathName);

    //2.读取文件
    if (pathName != "favicon.ico") {
      fs.readFile("./static" + pathName, (err, data) => {
        if (err) {
          console.log("404");
          response.writeHead(404, {
            "Content-Type": 'text/html;charset="utf-8"',
          });
          response.end("页面不存在");
          return;
        }
        let mime = common.getMime(extname);

        response.writeHead(200, {
          "Content-Type": "" + mime + ';charset="utf-8"',
        });
        response.end(data);
      });
    }
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
