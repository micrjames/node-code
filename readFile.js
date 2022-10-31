const { readFile, writeFile } = require('fs'); // require('fs').promises; 
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

/*
const getText = path => {
	return new Promise((resolve, reject) => {
		readFile(path,'utf8', (err, data) => {
			if(err) {
				reject(err);
			} else {
				// handle data here	
				resolve(data);
			}
		}); 
	});
};
*/

//	getText('./content/first.txt')
//		.then(result => console.log(result))
//		.catch(err => console.log(err));

const start = async () => {
	try {
		const first = await readFilePromise('./content/first.txt', 'utf8'); // getText('./content/first.txt');
		const second = await readFilePromise('./content/second.txt', 'utf8'); // getText('./content/second.txt');
		await writeFilePromise('./content/result.txt', `This is awesome : ${first} ${second}`);
		// writeFile(path, str, { flag: 'a' });
		console.log(first,second);
	} catch(error) {
		console.log(error);
	}
};
start();
========================================================================================================================
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('.content/first.txt', 'utf8');
const second = readFileSync('.content/second.txt', 'utf8');

writeFileSync(
	'./content/result.txt',
	`Here is the result : ${first}, ${second}`,
	{ flag: 'a' }
);

--------------------------------------------
const { writeFileSync } = require('fs');

for(let i = 0; i < 10000; i++) {
	writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' });
}

const { createReadStream } = require('fs');

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf8' });
stream.on('data', result => {
	console.log(result);
});
stream.on('error', err => console.log(err));
---------------------------------------------
const http = require('http');
const fs = require('fs');

http
.createServer((req, res) => {
	// const text = fs.readFileSync('./content/big.txt', 'utf8');
	// res.end(text);
	const fileStream = fs.createReadStream(./content/big.txt', 'utf8');
	fileStream.on('open', () => {
		fileStream.pipe(res);
	});
	fileStream.on('error', err => {
		res.end(err);
	});
})
.listen(5000);
