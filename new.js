const http = require('http');

const result =[1,2,3,4];

const server = http.createServer(function(req,res){
    res.write('ankit');
    res.end();

});

server.listen(3000,() => console.log     ('Listing on port 3000'));