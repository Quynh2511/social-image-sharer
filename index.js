//var FBAdapter = require('./fb');
//
//
//var adapter = FBAdapter({
//    appId: '1379747485658310',
//    appSecret: 'c337805df3ff9299c5aa46aa42d3d2b3',
//    apiVersion: '2.5',
//    accessToken: 'CAATm337DLMYBAFx2TZA83KlEdaXHH9GFV8FZAKkDwKg8YnuqZBjIf3Y7EomZCFNPGmrTPlKn' +
//                 'kJcrCCuSlG067sWkgdxDfCvcA9kQ4cUzXWG0pcBY5HdMEBlVmnBzNN48cE554useWyrJm8V4es' +
//                 'JoLQcC7JVzSPwnKVDpGe9ci56ANNpV6iPdVJRQ3i4zJJgZCJvFfSBQnOgZDZD'
//});
//
//adapter.post(__dirname + '/ngoctrinh.jpg').then(function (response) {
//    console.log(response);
//}, function (e) {
//    console.log(e);
//});
//
//var request = require('request');
//
//var TwitterRequestFactory = function (request) {
//    this.make = function () {
//
//    }
//};
//
//request.post('https://upload.twitter.com/1.1/media/upload.json', {}, function (error, response, body) {
//    console.log(JSON.parse(body));
//});
//
//
//var OAuth = require('oauth-1.0a');
//
//var request_data = {
//    url: 'https://api.twitter.com/1.1/statuses/update.json',
//    method: 'POST',
//    data: {
//        status: 'So Cute'
//    }
//};
//
//var token = {
//    public: '1590979938-BDvHlgGJwBRZNi0038KGnUIzBB5jNuuC3zpCOVm',
//    secret: 'k606voP0YMP6xdggwe1iqyfmVo6TaUpLZpSaBcf2qDzPO'
//};
//

//
//
//
//console.log(oauth.toHeader(oauth.authorize(request_data, token)).Authorization);
//
var adapter = require('./twitter')({
    oauth: {
        consumer: {
            'public': 'e9i5XWtMDVR21NMuv0lMgDZpy',
            'secret': 'PQitQYHLXAChEd5StKCqVCUdS5aSnvYdlgGz9pSCU9942OJcqu'
        },
        signature_method: 'HMAC-SHA1'
    },
    token: {
        'public': '1590979938-BDvHlgGJwBRZNi0038KGnUIzBB5jNuuC3zpCOVm',
        'secret': 'k606voP0YMP6xdggwe1iqyfmVo6TaUpLZpSaBcf2qDzPO'
    },
    status: 'Test',
    apiVersion: '1.1'
});

adapter.post(__dirname + '/ngoctrinh.jpg').then(function (response) {
    console.log(response);
}, function (e) {
    console.log(e);
});


