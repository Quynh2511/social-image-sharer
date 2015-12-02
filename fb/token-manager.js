var Promise = require('bluebird');

var TokenManager = function (factory) {
    this.cachedToken = null;
    this.token = function () {
        var self = this;
        if (self.cachedToken) {
            return new Promise(function (resolve) {
                resolve(self.cachedToken);
            })
        } else {
            return factory.makeLongTermExchangeRequest().then(function (token) {
                self.cachedToken = token;
                return token;
            })
        }
    }
};

module.exports = TokenManager;