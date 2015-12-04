var express         = require('express');
var RendererFactory = require('./lib/renderer');
var fs              = require('fs');

var renderer = RendererFactory(require('./config'));
var template = fs.readFileSync(__dirname + '/template.html').toString();

var app = express();

/**
 * Serves static image
 */
app.use(express.static(__dirname + '/public'));

/**
 * API for rendering the image
 */
app.get('/render', function (request, response) {
    renderer.render(template, {user: request.query.user}).then(function (link) {
        response.json({
            status: 'SUCCESS',
            link: link
        });
    }, function (e) {
        response.json({
            status: 'ERROR',
            message: e.toString()
        })
    });
});

app.listen(3000);