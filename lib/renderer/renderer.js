var Promise = require('bluebird');
var querystring = require('querystring');

var Renderer = function (phantomPageResolver, filenameGenerator) {
    this.phantomPageResolver = phantomPageResolver;
    this.filenameGenerator   = filenameGenerator;
};

Renderer.prototype.setFormat = function (format) {
    this.format = format;
    return this;
};

Renderer.prototype.setQuality = function (quality) {
    this.quality = quality;
    return this;
};

Renderer.prototype.render = function (templateUrl, data) {
    var format   = this.format;
    var quality  = this.quality;
    var fileName = this.filenameGenerator.generate(format);

    return this.phantomPageResolver.resolve().then(function (page) {
        return new Promise(function (resolve) {
            page.viewportSize = { width: 600, height: 600 };
            page.open(templateUrl + '?' + querystring.stringify(data), function () {
                page.render(fileName.physical, {format: format, quality: quality}, function () {
                    page.exit();
                    resolve(fileName);
                });
            });
        });
    });
};


module.exports = Renderer;