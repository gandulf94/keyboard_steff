var http = require('http');
var url = require('url');
var fs = require('fs');

  
var server = http.createServer(function (req, res) {
  const settings = JSON.parse(fs.readFileSync("settings.json"));

  const queryObject = url.parse(req.url,true).query;
  const queryFile = url.parse(req.url,true).pathname;
  const sender = queryObject.sender;
  const user = settings.user;
  console.log("queryFile: "+queryFile);
  console.log("sender: "+sender);
  console.log("user: "+user);
  
  if(queryFile != "/record") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var msg = "call /record?sender=sender to record a new message";
    res.end(msg);  
    console.log(msg);
    return;
  }
  if(!user.includes(sender)) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var msg = "unvalid user for recording";
    res.end(msg);  
    console.log(msg);
    return; 
  }
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("valid user for recording"); 
  console.log(user);
  
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8080);
