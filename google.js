var GGAdapter = require('./google/adapter');
var Factory   = require('./google/google-auth-request-factory');
var request = require('request');

var factory = new Factory(request);
var adapter = new GGAdapter(factory);

adapter.setToken('ya29.QAKeKsvK8D_EqvtaDhohxy3UyFazAp37j8V8ypK8IVgdDCVeAoJ7l8sDMS2Cj8uT3Zby');
adapter.setApiVersion('v1');


adapter.post(__dirname + '/ngoctrinh.jpg').then(function (response) {
    console.log(response);
}, function (e) {
    console.log(e);
});
