"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
dotenv_1.default.config();
var PORT = process.env.PORT;
var app = (0, express_1.default)();
// app.use(express.json());
app.use((0, cors_1.default)({ origin: "http://localhost:".concat(PORT) }));
app.use(express_1.default.static('./dist/app'));
app.use(express_1.default.urlencoded({ extended: false })); // parse form data
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'app/views'));
app.get('/', function (req, res) {
    res.render('index', { msg: "Enter the info below.", loggedIn: false, sent: false });
});
app.get('/signout', function (req, res) {
    res.redirect('/');
});
app.post('/login', function (req, res) {
    var name = req.body.name;
    if (name) {
        return res.status(200).render('index', {
            msg: "Thanks, ".concat(name, ", for entering the info."),
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
app.listen(PORT, function () {
    console.log("Server is listening on port ".concat(PORT, "..."));
});
