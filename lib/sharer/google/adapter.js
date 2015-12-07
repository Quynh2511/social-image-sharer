var fs = require('fs');

var GoogleAdapter = function (factory) {
    this.factory = factory;

    this.setApiVersion = function (apiVersion) {
        this.apiVersion = apiVersion;
    };

    this.setJsonBoby = function (jsonBody) {
        this.jsonBody = jsonBody;
    };

    this.setToken = function (accessToken) {
        this.token = accessToken;
    };

    this.setStatus = function (status) {
        this.status = status;
    };
    this.post = function (image) {
        var status  = this.status;
        var factory = this.factory;
        var apiVersion = this.apiVersion;
        var token = this.token;

        return factory.make({
            headers: {
                'Authorization': 'OAuth ' + token,
                'Content-Type': 'image/jpeg'
            },
            url: 'https://www.googleapis.com/upload/plusDomains/' + apiVersion + '/people/me/media/cloud',
            method: 'POST',
            formData: {media: fs.createReadStream(image)}
        }).then(function (json) {
            //console.log(json['id']);
            return json['id'];
        }).then(function (mediaId) {
            return factory.make({
                headers: {
                    'Authorization': 'OAuth ' + token,
                    'Content-Type': 'application/json'
                },
                json: true,
                method  : 'POST',
                url     : 'https://www.googleapis.com/plusDomains/' + apiVersion + '/people/me/activities',
                data    :
                {
                    "object" : {
                        "content" : "Grumpy cat.... #mondays #caturday",
                        "attachments" : [ {
                            "objectType" : "photo",
                            "id" : mediaId
                        } ]
                    },
                    "access" : {
                        "items" : [ {
                            "type" : "domain"
                        } ],
                        "domainRestricted" : true
                    }
                }
            });
        })
        ;
    }
};

module.exports = GoogleAdapter;
