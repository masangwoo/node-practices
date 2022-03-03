//정적자원에 대한 서비스
const http = require("http");
const fs = require('fs');

const port = 9090;
const server = http.createServer(function(req,resp){
    console.log(req.url);

    if(req.url === '/'){
        req.url = 'index.html';
    }

      // data = fs.readFileSync('');//동기
    fs.readFile(__dirname + '/public/'+req.url, function(error,data){
       //비동기-callback
        resp.writeHead(200, {
        'Content-Type' : 'text/html'
        });

         resp.end('<h1>Hello World</h1>'); 

    });



});


server.listen(9090, function(){
    console.log("http server running on "+port);
});