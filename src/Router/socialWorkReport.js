const express = require('express');
const route = express.Router();
const ExpressError = require('../Utils/ExpressError.js');
const createSocialWorkReportValidation = require('../Middleware/socialWorkReportvalidation.js');

route.get('/', createSocialWorkReportValidation, (req, res) => {
    res.send("hello");
});

route.all("*", (req, res, next) => {
    next(new ExpressError(404, "Social Work Report Route", "page not found"));
});

module.exports = route;
