
class HttpError extends Error {
    constructor(message, errorCode, filesPath) {
        super(message);
        this.code = errorCode;
        this.filesPath = filesPath;
    }
}

module.exports = HttpError;