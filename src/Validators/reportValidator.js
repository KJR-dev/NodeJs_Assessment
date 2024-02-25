const Joi = require('joi');

exports.createReportValidatorSchema = Joi.object({
    SocialWorkReport: Joi.object({
        category: Joi.string().required().valid('Education', 'Healthcare'),
        points: Joi.number().min(0).allow("", null),
        questions: Joi.string().required().max(500),
        note: Joi.string().max(1000).allow("", null)
    }).required()
});

exports.updateReportValidatorSchema=Joi.object({
    SocialWorkReport: Joi.object({
        id:Joi.number().required().min(1),
        points: Joi.number().required().min(0),
        note: Joi.string().required().max(1000)
    }).required()
});

exports.deleteReportValidatorSchema=Joi.object({
    id:Joi.number().required().min(1)
})