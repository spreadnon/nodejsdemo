var http = require('http');

function formatApi(api){
    return "http://www.itying.com/"+api;
}

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': "text/html;charset='utf-8'"});
    response.write("<head> <meta charset='UTF-8'> </head>")//解决乱码
    var api = formatApi('api/plist')
    request.write(api)
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');