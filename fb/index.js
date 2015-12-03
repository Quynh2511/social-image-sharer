var FBAdapter              = require('./adapter');
var TokenManager           = require('./token-manager');
var FacebookRequestFactory = require('./factory');

/**
 *
 * @param config
 * @returns {Adapter}
 */
module.exports = function (config) {
    var fbFactory = new FacebookRequestFactory(
        config.appId, config.appSecret, config.apiVersion, config.accessToken
    );

    return new FBAdapter(fbFactory, new TokenManager(fbFactory));
};
