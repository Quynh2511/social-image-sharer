var Promise = require('bluebird');

var GoogleRequest = function (request) {

    this.make = function (requestData) {
        return new Promise(function (resolve, reject) {
            requestData.multipart = [
                {
                    'content-type': 'application/json',
                    body: JSON.stringify(requestData.data)
                }
            ];
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

module.exports = GoogleRequest;