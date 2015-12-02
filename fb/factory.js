var request         = require('request');
var FacebookError   = require('./error');
var fs              = require('fs');

var FacebookRequestFactory = function (clientId, clientSecret, apiVersion, accessToken) {
    this.accessToken = accessToken;

    this.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };

    this.makeLongTermExchangeRequest = function () {
        var shortTermAccessToken = this.accessToken;
        console.log('request long token');
        return new Promise(function (resolve) {
            request.get(
                'https://graph.facebook.com/' +
                'v' + apiVersion + '/' +
                'oauth/access_token?grant_type=fb_exchange_token&' +
                'client_id=' + clientId + '&' +
                'client_secret=' + clientSecret + '&' +
                'fb_exchange_token='+shortTermAccessToken,
                function (error, response, json) {
                    if (error) {
                        throw error
                    } else {
                        var responseBody = JSON.parse(json);
                        if (responseBody.error) {
                            throw new FacebookError(responseBody.error);
                        } else {
                            resolve(responseBody['access_token']);
                        }
                    }
                }
            )
        })
    };


    this.makePostRequest = function (imageUrl) {
        var token = this.accessToken;
        return new Promise(function (resolve) {
            request
                .post(
                    'https://graph.facebook.com/v' + apiVersion + '/me/photos?access_token=' + token,
                    {
                        formData: {img: fs.createReadStream(imageUrl)}
                    },
                    function (error, response, json) {
                        if (error) {
                            throw error;
                        } else {
                            var responseBody = JSON.parse(json);
                            if (responseBody.error) {
                                throw new FacebookError(responseBody.error);
                            } else {
                                resolve(responseBody);
                            }
                        }
                    }
                );
        })
    };
};

module.exports = FacebookRequestFactory;