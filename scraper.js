const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

const url = 'https://www.theguardian.com/uk';
axios(url)
	.then(response => {
		const html = response.data;
		const $ = cheerio.load(html);
		const articles = [];

		$('.fc-item__title').each(function() {
			const title = $(this).text();
			const uri = $(this).find('a').attr('href');

			articles.push(
				{
					title,
					uri
				}
			);
		});

		console.log(articles);
	}).catch(err => console.log(err));

app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`);
});
