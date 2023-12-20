const { readFile } = require('fs');
const figlet = require('figlet');

const servePage = (res, path) => {
   servePageResource(res, path, 'html');
};

const servePageResource = (res, path, type) => {
   readFile(path, (err, data) => {
	  if(type) res.writeHead(200, {'Content-Type': `text/${type}`});
	  res.write(data);
	  res.end();
   });
};

const serveJSONResource = (res, params, queryStrMatch) => {
   if(queryStrMatch in params) {
	  res.writeHead(200, { "Content-Type": "application/json" });
	  const objToJson = {
		 name: "leon",
		 status: "Boss Man",
		 currentOccupation: "Baller"
	  };
	  res.end(JSON.stringify(objToJson));
   } else {
	  figlet('query not in database', (err, data) => {
		 if(err) {
			console.log("Something went wrong...");
			console.dir(err);
			return;
		 }
		 console.log(data);
		 res.writeHead(200, {'Content-Type': 'application/json'});
		 res.write(data);
		 res.end();
	  });
   }
};

const serveResources = (res, path) => {
   if(path == '/') {               
       servePage(res, 'src/index.html', 'html');
   } else if(path == '/css/main.css') {
       servePageResource(res, 'src/css/main.css');
   } else if(path == '/css/oops_main.css') {
       servePageResource(res, 'src/css/oops_main.css');
   } else {                        
       servePage(res, 'src/oops.html', 'html');
   }
};

module.exports = { serveResources, serveJSONResource };
