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
//
//Authorization: OAuth oauth_consumer_key="e9i5XWtMDVR21NMuv0lMgDZpy", oauth_nonce="0a181048b5a131b4ef78c3cbdad2a940", oauth_signature="iomdjosLCvLPNk9vi5OKNcu5gvk%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1449045749", oauth_token="1590979938-BDvHlgGJwBRZNi0038KGnUIzBB5jNuuC3zpCOVm", oauth_version="1.0"
//Authorization: OAuth oauth_consumer_key="e9i5XWtMDVR21NMuv0lMgDZpy", oauth_nonce="a418caad6d99af8d7d42c4dbf11b89e7", oauth_signature="YGvojuzwGfHfhf4d8D1w4fy%2B6pU%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1449045907", oauth_token="1590979938-BDvHlgGJwBRZNi0038KGnUIzBB5jNuuC3zpCOVm", oauth_version="1.0"