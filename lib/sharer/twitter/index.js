var TWAdapter = require('./adapter');
var Factory   = require('./twitter-auth-request-factory');
var OAuth = require('oauth-1.0a');
var request = require('request');

/**
 *
 * @param config
 * @returns {TwitterAdapter}
 */
module.exports = function (config) {

    var oauth = OAuth(config.oauth);

    var factory = new Factory(request, oauth);
    var adapter = new TWAdapter(factory);

    factory.setToken(config.token.public, config.token.secret);
    adapter.setApiVersion(config.apiVersion);
    adapter.setStatus(config.status);

    return adapter;
};


