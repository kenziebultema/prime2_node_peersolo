var http = require('http');
var balance = require('./balance');

http.createServer(function(request, response){
  response.writeHead(200);
  response.write(balance.accountText());
  response.write(balance.accountMoney());
  response.end();
}).listen(3000);
