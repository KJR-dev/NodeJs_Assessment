const Joi = require('joi');

module.exports.createSocialWorkReportValidatorSchema = Joi.object({
    SocialWorkReport: Joi.object({
        category: Joi.string().required().valid('Education', 'Healthcare'),
        points: Joi.number().required().min(0),
        questions: Joi.string().required().max(500),
        note: Joi.string().max(1000).allow("", null)
    }).required()
});

