const tools = require('./module/tools.js')

console.log(tools)

var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': "text/html;charset='utf-8'"});
    response.write("<head> <meta charset='UTF-8'> </head>")//解决乱码

    var api = tools.formatApi('/api/xxx')
    response.write(api)
    
    response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');