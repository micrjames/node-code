const http = require('http');                                             
const url = require('url');
const querystring = require('node:querystring');
require('dotenv').config();
 
const { serveJSONResource } = require('./serveResources.js');
 
const PORT = process.env.PORT;
 
http.createServer((req, res) => {
    const urlObj = url.parse(req.url);
	const params = querystring.parse(urlObj.query);

	if(urlObj.pathname == '/api') {
	   serveJSONResource(res, params, "student");
    }
 
}).listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
