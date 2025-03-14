// var _ = require('underscore')
// var m2 = require('./module2');


// //m2();

// console.log(_);

var http = require('http');

var server = http.createServer(function(request, response){
    console.log('Got a request');
    response.write('Hello');
    response.end();
});

server.listen(3000);
