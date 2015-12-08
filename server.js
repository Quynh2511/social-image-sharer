require('dotenv').load();

var express         = require('express');
var RendererFactory = require('./lib/renderer');
var FacebookPostFactory
                    = require('./lib/sharer/fb');
var TwitterFactory  = require('./lib/sharer/twitter');
var bodyParser      = require('body-parser');
var config          = require('./config');
var renderer        = RendererFactory(config);
var fbSharer        = FacebookPostFactory(config.sharer.facebook);
var twitterSharer   = TwitterFactory(config.sharer.twitter);
var Promise         = require('bluebird');
var app = express();

app.set('view engine', 'ejs');

/**
 * Serves static image
 */
app.use('/', express.static(__dirname + '/public'));

/**
 * Parser
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**
 * API for rendering the image
 */
app.get('/rendering/winner', function (request, response) {
    return response.render('winner', request.query);
});

app.get('/rendering/new-bidder', function (request, response) {
    return response.render('new-bidder', request.query);
});

app.post('/share/winner', function (request, response) {
    renderer.render(config.template.winner, request.body)
        .then(function (file) {
            return Promise.all([
                fbSharer.post(file.physical),
                twitterSharer.post(file.physical)
            ]);
        })
        .then(function (apiResponses) {
            response.json(apiResponses);
        })
        .catch(function (error) {
            response.status(500).json(error);
        })
    ;

});

app.post('/share/new-bidder', function (request, response) {
    console.log(request.body);
    renderer.render(config.template['new-bidder'], request.body)
        .then(function (file) {
            return Promise.all([
                fbSharer.post(file.physical),
                twitterSharer.post(file.physical)
            ]);
        })
        .then(function (apiResponses) {
            response.json(apiResponses);
        })
        .catch(function (error) {
            response.status(500).json(error);
        })
    ;
});

app.listen(config.server.port);