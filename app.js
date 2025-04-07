const http = require('http');
const fs = require('fs');
const url = require('url')
const port = 3000;

const server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200, {"Content-Type" : "text/html"});
        fs.readFile("index.html", function(error, data){
            if(error){
                res.writeHead(404);
                res.write("File Not Found");
            }else{
                res.write(data);
            }
            res.end();
        });
    }else if(req.url === "/calc.css"){
        res.setHeader('Content-type', 'text/css');
        res.write(fs.readFileSync('calc.css'));
        res.end();
    }else if(req.url === "/calc.js"){
        res.setHeader('Content-type', 'language=javascript');
        res.write(fs.readFileSync('calc.js'));
        res.end();
    }else{
        res.write("invalid request" + req.url)
        res.end();
    }
})

server.listen(port, function(error){
    if(error){
        console.log("Error: ", error);
    }else{
        console.log("Port Successful: " + port);
    }
})