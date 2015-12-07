var Promise = require('bluebird');

var TwitterRequest = function (request, oauth) {

    this.setToken = function (publicToken, secretToken) {
        this.token = {
            'public': publicToken,
            'secret': secretToken
        };
        return this;
    };

    this.makeSignature = function (requestData) {
        return oauth.toHeader(oauth.authorize(requestData, this.token));
    };

    this.make = function (requestData) {
        requestData.headers = this.makeSignature(requestData);

        return new Promise(function (resolve, reject) {
            request(requestData, function (error, response, body) {
                if (error) {
                    reject(error);
                } else {
                    var json = JSON.parse(body);
                    if (json.errors) {
                        throw new Error(json.errors[0].message, json.errors[0].code)
                    } else {
                        resolve(json);
                    }
                }
            })
        });
    };

};

module.exports = TwitterRequest;