// imports
var express = require('express');
var app = express();
var fs = require('fs');

// constants
const appRootDir = "/node";
const settings = JSON.parse(fs.readFileSync("settings.json"));

app.get('/node/record', function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

  const sender = req.query.sender;
  const user = settings.user;

  // check for valid sender
  if(!user.includes(sender)) {
    res.write('<h1>who are you:</h1>\n'); 
    user.forEach(function(user_) {
      res.write("<a href=record?sender="+user_+">"+user_+"</a>\n");
      console.log(req.hostname+req.path);
      console.log();
    })
    res.end();  
    return;
  }

  // list of possible receivers
  receiverList = user.filter(user_ => user_ !== sender);

  
res.end("asdf"); 

});

app.listen(8086);
