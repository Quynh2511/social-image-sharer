var FacebookError = function (fbResponse) {
    this.message   = fbResponse.message;
    this.code      = fbResponse.code;
    this.type      = fbResponse.type;
    this.fbTraceId = fbResponse.fbTraceId;
    Error.call(this, this.message);
    Error.captureStackTrace(this)
};

module.exports = FacebookError;