//引入http模块
var http = require('http');
const url = require('url')
/**
 * 创建一个web服务
request： 获取url传过来的信息
response ： 给浏览器相应的信息
 */
http.createServer(function (request, response) {
  console.log(request.url)
    //设置相应头
  response.writeHead(200, {'Content-Type': "text/html;charset='utf-8'"});
  response.write("<head> <meta charset='UTF-8'> </head>")//解决乱码

//   console.log(request.url);
  if(request.url != '/favicon.ico'){
    var userinfo = url.parse(request.url,true).query
    console.log(userinfo);
  }

  response.end('nihao111');//结束相应
}).listen(8081);//端口

console.log('Server running at http://127.0.0.1:8081/');