const express = require('express');
const app = express();

app.use(express.static('./public'));
app.all('*', (req, res) => {
   	res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(5000, () => {
   	console.log('server listening on port 5000...');
});

// app.get(route, cb);
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
// app.get("/api/products", (req, res) => {
// });
// app.get("/api/products/:productID", (req, res) => {
//  const { productID } = req.params;
// 	const singleProduct = products.find(product => product.id === Number(productID));
// 	res.json(singleProduct);
// 	});
//
// 	app.get("api/v1/query", (req, res) => {
// 		const {search, limit} = req.query;
//
// 		let sortedProducts = [...products];
//
// 		if(search) {
// 			sortedProducts = sortedProducts.filter(product => {
// 				return product.name.startsWith(search);
// 			});
// 		}
// 		if(limit) {
// 			sortedProducts.slice(0, Number(limit));
// 		}
//
// 		res.status(200).send(sortedProducts);
// 	});
// 	});
