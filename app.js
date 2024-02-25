require('dotenv').config();
const express = require("express");
require('mysql2');
require("./src/Model/connectionAndSchema.js");
const route = require("./src/Router/socialWorkReport.js");


const app = express();

const PORT = parseInt(process.env.PORT) || 8080;

app.use("/", (req, res) => {
    res.send("Server is working.");
});

app.use("/app/SocialWorkReport", route);

app.use((err, req, res, next) => {
    let { statusCode = 500, from = AbortController, message = "Sometning went wrong" } = err;
    res.status(statusCode).json({ statusCode, message, from });
})
app.listen(PORT, () => {
    console.log(`App listen at http://localhost:${PORT}`);
});