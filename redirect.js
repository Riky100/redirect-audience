var http = require('http');

var counter = 0;

http.createServer(function (req, res) {

  switch (counter) {
    
    case 0:
      res.writeHead(301, { Location: 'http://www.google.com/' }); //link 1
      res.end('Redirecting!');
      break;
      
    case 1:
      res.writeHead(301, { Location: 'http://www.apple.com/' }); //link 2
      res.end('Redirecting!');
      break;
      
    case 2:
      res.writeHead(301, { Location: 'http://www.youtube.com/' }); //link 3
      res.end('Redirecting!');
      break;
      
    case 3:
      res.writeHead(301, { Location: 'http://www.wordreference.com/' }); //link 4
      res.end('Redirecting!');
      break;

    default:
      break;
  }
  
  //reset the counter if all links were used
  if (counter >= 3)
    counter = 0;
  else
    counter++;

}).listen(process.env.PORT || 8080); //attach to the local host and http port
