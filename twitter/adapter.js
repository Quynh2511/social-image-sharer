var fs = require('fs');

var TwitterAdapter = function (factory) {
    this.factory = factory;

    this.setApiVersion = function (apiVersion) {
        this.apiVersion = apiVersion;
    };

    this.setStatus = function (status) {
        this.status = status;
    };
    this.post = function (image) {
        var status  = this.status;
        var factory = this.factory;
        var rootUrl = 'https://api.twitter.com/' + this.apiVersion;

        return factory.make({
            url: 'https://upload.twitter.com/' + this.apiVersion + '/media/upload.json',
            method: 'POST',
            formData: {media: fs.createReadStream(image)}
        }).then(function (json) {
            return json['media_id_string'];
        }).then(function (mediaId) {
            return factory.make({
                method  : 'POST',
                url     : rootUrl + '/statuses/update.json?' +
                'status=' + status + '&' +
                'media_ids=' + mediaId
            });
        })
        ;
    }
};

module.exports = TwitterAdapter;
