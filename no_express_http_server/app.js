const http = require('http');
const url = require('url');
require('dotenv').config();

const { serveResources } = require('./serveResources.js');

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
   const urlObj = url.parse(req.url);
   serveResources(res, urlObj.pathname);
}).listen(PORT, () => {
   console.log(`Server running on port: ${PORT}`);
});
