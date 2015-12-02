var Promise = require('bluebird');

var Adapter = function (factory, tokenManager) {
    this.post = function (imageUrl) {
        return tokenManager.token().then(function (token) {
            factory.setAccessToken(token);
            return factory.makePostRequest(imageUrl);
        });
    };
};

module.exports = Adapter;