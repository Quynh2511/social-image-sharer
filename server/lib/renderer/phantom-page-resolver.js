var phantom = require('phantom');
var Promise = require('bluebird');

var Resolver = function () { };

Resolver.prototype.setOptions = function (options) {
    this.options = options;
    return this;
};

Resolver.prototype.resolve = function () {
    var options = this.options;
    return new Promise(function (resolve) {
        phantom.create(function (ph) {
            ph.createPage(function (page) {
                page.exit = function () { ph.exit(); };
                resolve(page);
            });
        }, options);
    });
};

module.exports = Resolver;