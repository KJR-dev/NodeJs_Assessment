const express = require('express');
const router = express.Router();
const ExpressError = require('../Utils/ExpressError.js');
const reportValidation = require('../Middleware/Reportvalidation.js');
const reportController = require('../Controller/reportController.js');

router.post('/createReport', reportValidation.createReportValidation, reportController.createReport);
router.get('/getAllReport', reportController.getAllReport);
router.patch('/updateReport', reportValidation.updateReportValidation, reportController.updateReport);
router.delete('/deleteReport/:id', reportValidation.deleteReportValidation, reportController.deleteReport);

router.all("*", (req, res, next) => {
    next(new ExpressError(404, "Social Work Report Route", "page not found"));
});

module.exports = router;
