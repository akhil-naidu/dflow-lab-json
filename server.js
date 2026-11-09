const http = require("http");
const port = Number(process.env.PORT || 3000);
http.createServer((req, res) => {
  res.writeHead(200, {"content-type": "text/plain"});
  res.end("built-from-template\n");
}).listen(port);
