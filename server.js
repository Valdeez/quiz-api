const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const db = require("./models/Index");
const quizRoute = require("./router/quiz");
const jobsheetRoute = require("./router/jobsheet");
const authRoute = require("./router/auth");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();

app.get("/", (req, res) => {
	res.send("Quiz ExpressJS API by Dapa");
});

app.use("/api/quizzes", quizRoute);
app.use("/api/jobsheet", jobsheetRoute);
app.use("/api/auth", authRoute);

app.listen(port, () =>
	console.log(`App listening on port http://localhost:${port}!`)
);
