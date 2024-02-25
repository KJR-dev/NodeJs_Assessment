const wrapAsync = require('../Utils/wrapAsync.js');
const { connection } = require('../Model/connectionAndSchema.js');
const ExpressError = require('../Utils/ExpressError.js');
const reportService = require('../Service/reportService.js');

exports.createReport = wrapAsync(async (req, res, next) => {
    const { category, points = 0, questions, note } = req.body.SocialWorkReport;
    const result = await reportService.createReport(category, points, questions, note);
    return res.status(200).json({ message: "Social work report created successfully", data: result });
});

exports.getAllReport = wrapAsync(async (req, res, next) => {
    const result = await reportService.getAllReports();
    return res.status(200).json({ message: "Get all social work report successfully", data: result });
});

exports.updateReport = wrapAsync(async (req, res, next) => {
    const { points, note, id } = req.body.SocialWorkReport;
    const result = await reportService.updateReport(points, note, id);
    if (result.affectedRows === 0) {
        throw new ExpressError(404, "Error occurred from DB", "No report exists with the provided id");
    }
    return res.status(200).json({ message: "Update social work report successfully", data: result });
});

exports.deleteReport = wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const result = await reportService.deleteReport(id);
    if (result.affectedRows === 0) {
        throw new ExpressError(404, "Error occurred from DB", "No report exists with the provided id")
    }
    return res.status(200).json({ message: "Delete social work report successfully", data: result })
});

