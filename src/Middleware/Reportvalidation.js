const Joi = require('joi');
const ExpressError = require("../Utils/ExpressError.js");
const reportValidator = require("../Validators/reportValidator.js");


exports.createReportValidation = (req, res, next) => {
    let { error } = reportValidator.createReportValidatorSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, "Server side validation error", error);
    } else {
        next();
    }
}

exports.updateReportValidation = (req, res, next) => {
    let { error } = reportValidator.updateReportValidatorSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, "Server side validation error", error)
    } else {
        next();
    }
}

exports.deleteReportValidation = (req, res, next) => {
    let { error } =reportValidator.deleteReportValidatorSchema.validate(req.params);
    if(error){
        throw new ExpressError(400, "Server side validation error", error)
    }else{
        next();
    }
}