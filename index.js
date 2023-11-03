const { fchmodSync } = require('fs');
const http = require('http');

const result = [1,2,3,4];

const server = http.createServer(function(req,res){
    res.write(JSON.stringify('result'));    
    res.end();
});

server.listen(3000,() => cons     ole.log('Listing on port 3000'));
