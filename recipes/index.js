const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(cors());

const conn = require("./conn");
/*
mongoose.connect(`${conn.DB.HOST}:${conn.DB.PORT}/users`);
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to DB ..."));
*/

const userRouter = require("./routes/userRoutes");
app.use("/", userRouter);

const PORT = conn.PORT;
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT} ...`);
});
