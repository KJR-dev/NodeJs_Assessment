class ExpressError extends Error {
    constructor(statusCode,from, message) {
        super();
        this.statusCode = statusCode;
        this.from=from;
        this.message = message;
    }
}

module.exports = ExpressError;