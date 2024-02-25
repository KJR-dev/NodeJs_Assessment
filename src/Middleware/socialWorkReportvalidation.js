const Joi = require('joi');
const ExpressError = require("../Utils/ExpressError.js");
const { createSocialWorkReportValidatorSchema } = require("../Validators/socialWorkReportValidator.js");


const createSocialWorkReportValidation = (req, res, next) => {
    let { error } = createSocialWorkReportValidatorSchema.validate(req.body);

    if (error) {
        throw new ExpressError(400, "Server Side Validation Error", error);
    } else {
        next();
    }
}

module.exports = createSocialWorkReportValidation;