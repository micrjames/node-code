"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const PORT = process.env.PORT;
const app = (0, express_1.default)();
// app.use(express.json());
app.use((0, cors_1.default)({ origin: `http://localhost:${PORT}` }));
app.use(express_1.default.static('./dist/app'));
app.use(express_1.default.urlencoded({ extended: false })); // parse form data
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'app/views'));
app.get('/', (req, res) => {
    res.render('index', { msg: "Enter the info below.", loggedIn: false });
});
app.get('/signout', (req, res) => {
    res.redirect('/');
});
app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name)
        return res.status(200).render('index', {
            msg: `Thanks, ${name}, for entering the info.`,
            loggedIn: true
        });
    res.status(401).render('index', {
        msg: "Field must be filled in.",
        loggedIn: false
    });
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});
