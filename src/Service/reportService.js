const { connection } = require('../Model/connectionAndSchema.js');
const ExpressError = require('../Utils/ExpressError.js');

async function createReport(category, points = 0, questions, note) {
    try {
        const query = "INSERT INTO social_work_report (category, points, questions, note) VALUES (?, ?, ?, ?)";
        const [result] = await connection.promise().query(query, [category, points, questions, note]);
        return result;
    } catch (error) {
        throw new ExpressError(400, "Error occurred from DB service", "Failed to create social work report");
    }
}

async function getAllReports() {
    try {
        const query = "SELECT * FROM social_work_report ORDER BY category ASC";
        const [result] = await connection.promise().query(query);
        return result;
    } catch (error) {
        throw new ExpressError(400, "Error occurred from DB service", "Failed to get social work reports from the database");
    }
}

async function updateReport(points, note, id) {
    try {
        const query = "UPDATE social_work_report SET points=?, note=? WHERE id=?";
        console.log("Executing query:", query); // Log the query for debugging
        const [result] = await connection.promise().query(query, [points, note, id]);
        console.log("Query result:", result); // Log the query result for debugging
        return result;
    } catch (error) {
        throw new ExpressError(400, "Error occurred from DB service", "Failed to Update social work reports into database");
    }
}

async function deleteReport(id) {
    try {
        const query = "DELETE FROM social_work_report WHERE id=?";
        const [result] = await connection.promise().query(query, id);
        return result;
    } catch (error) {
        throw new ExpressError(400, "Error occurred from DB service", "Failed to delete social work reports into database");
    }
}

module.exports = {
    getAllReports,
    createReport,
    updateReport,
    deleteReport
};