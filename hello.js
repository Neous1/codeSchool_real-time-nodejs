var http = require("http");

// http.createServer(function(req, res){
//     res.writeHead(200);
//     // res.write("Hello, this is dog.");
//     res.end("Hello, this is dog.");
// }).listen(8080, function(){
//     console.log("listening on port 8080...");
// });
http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type: html/text"});
    fs.readFileSync("index.html", function(){
        console.log(contents);
        
    });
    res.write("Hello, this is dog.");
    res.end();
}).listen(8080);