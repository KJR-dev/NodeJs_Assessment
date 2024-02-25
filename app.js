require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
require('mysql2');
require("./src/Model/connectionAndSchema.js");
const reportRouter = require("./src/Router/reportRouter.js");
const wrapAsync = require('./src/Utils/wrapAsync.js');
const ExpressError = require('./src/Utils/ExpressError.js');
const app = express();

const PORT = parseInt(process.env.PORT) || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Server is working.");
});
app.use("/app/report", reportRouter);


app.use((err, req, res, next) => {
    let { statusCode = 400, from = "Root of NodeJS_ASSESSMENT or DB", message = "Sometning went wrong" } = err;
    res.status(statusCode).json({ statusCode, from, message });
})
app.listen(PORT, () => {
    console.log(`App listen at http://localhost:${PORT}`);
});