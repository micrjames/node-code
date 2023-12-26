import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const app: Application = express();

app.get('/', (req: Request, res: Response) => {
   res.send("Hello, World!");
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}...`);
});
