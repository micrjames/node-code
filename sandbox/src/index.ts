import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT;
const app: Application = express();

// app.use(express.json());
app.use(cors({ origin: `http://localhost:${PORT}`  }));
app.use(express.static('./dist/app'));
app.use(express.urlencoded({ extended: false }));	// parse form data
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));

app.get('/', (req: Request, res: Response) => {
   res.render('index', {msg: "Enter the info below.", loggedIn: false, sent: false});
});
app.get('/signout', (req: Request, res: Response) => {
   res.redirect('/');
});
app.post('/login', (req: Request, res: Response) => {
   const { name } = req.body;
   if(name) {
	  return res.status(200).render('index', {
		 msg: `Thanks, ${name}, for entering the info.`,
		 loggedIn: true,
	     sent: false
	  });
   }
   res.status(401).render('index', {
	  msg: "Field must be filled in.",
	  loggedIn: false,
	  sent: true
   });
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}...`);
});
