const http = require("http");
const { readFileSync } = require("fs");

const PORT = 3000;

const homePage = readFileSync("./pages/index.html");
const homeCSS = readFileSync("./pages/css/main.css");

const oopsPage = readFileSync("./pages/oops.html");
const oopsCSS = readFileSync("./pages/css/oops_main.css");

const server = http.createServer((req, res) => {
    const url = req.url;
   	if(url === "/" || url === "/index.html") {
	    res.writeHead(200, {"Content-Type": "text/html"});
	    res.write(homePage);
	   	res.end();
	} else if(url === "/css/main.css") {
	    res.writeHead(200, {"Content-Type": "text/css"});
	    res.write(homeCSS);
	   	res.end();
	} else if(url === "/css/oops_main.css") {
	    res.writeHead(200, {"Content-Type": "text/css"});
	    res.write(oopsCSS);
	   	res.end();
	} else {
	    res.writeHead(200, {"Content-Type": "text/html"});
	    res.write(oopsPage);
	   	res.end();
	} 
});

server.listen(PORT);
