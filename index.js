//1.
var http = require('http');
var fs = require('fs');
//2.
var server = http.createServer(function (req, resp) {
    //3.
    if (req.url === "/contact") {
        fs.readFile("contact.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    } else if (req.url === "/about") {
        fs.readFile("about.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });

    }else {
        //4.
        fs.readFile("home.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    }
});
//5.
server.listen(5006);
 
console.log('Server Started listening on 5006');