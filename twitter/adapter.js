var Promise      = require('bluebird');
var OAuth        = require('oauth-1.0a');
var fs           = require('fs');
var TwitterError = require('./error');

var TwitterAdapter = function (request, oauth) {
    this.request = request;
    this.oauth   = oauth;

    this.setApiVersion = function (apiVersion) {
        this.apiVersion = apiVersion;
    };
    this.setToken = function (publicToken, secretToken) {
        this.token = {
            'public': publicToken,
            'secret': secretToken
        }
    };
    this.setStatus = function (status) {
        this.status = status;
    };

    this.post = function (imageUrl) {

        var apiVersion = this.apiVersion;
        var token      = this.token;
        var status     = this.status;

        var request_data = {
            url: 'https://api.twitter.com/1.1/statuses/update.json',
            method: 'POST',
            data: {
                status: status
            }
        };

        request
            .post(
                {
                    url: 'https://upload.twitter.com/' + apiVersion + '/media/upload.json',
                    headers: oauth.toHeader(oauth.authorize(request_data, token))
                },
                {
                    formData: {media: fs.createReadStream(imageUrl)}
                },
                function (error, response, json) {
                    if (error) {
                        throw error;
                    } else {
                        var responseBody = JSON.parse(json);
                        if (responseBody.error) {
                            throw new TwitterError(responseBody.error);
                        } else {
                            resolve(responseBody);
                        }
                    }
                }
            );










        console.log(oauth.toHeader(oauth.authorize(request_data, token)).Authorization);
    };
};




TwitterAdapter.prototype.post = function (image) {
    var request = this.request;

    return new Promise(function () {
        request.post('https://upload.twitter.com/1.1/media/upload.json');

    })
};

module.exports = TwitterAdapter;