var express = require('express');
var google  = require('googleapis');
var OAuth2  = google.auth.OAuth2;
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

var oauth2Client = new OAuth2(
    '939505443485-kqhpl3ddq2pb2fu8dt8hfhp3opcju7ps.apps.googleusercontent.com',
    'fNUcF4nxxGx_9xFrCM9fdiZJ',
    'http://localhost:3000/oauth/callback'
);

app.use(bodyParser.urlencoded({extended: true}));
app.use(router);

router.get('/', function (request, response) {
    var scopes = [
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/plus.me',
        'https://www.googleapis.com/auth/calendar',
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/plus.profiles.read'
    ];
    var url = oauth2Client.generateAuthUrl({
        access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
        scope: scopes // If you only need one scope you can pass it as string
    });

    response.redirect(url);
});
router.get('/oauth/callback', function (request, response) {
    oauth2Client.getToken(request.query.code, function(err, tokens) {
        // Now tokens contains an access_token and an optional refresh_token. Save them.
        if(!err) {
            oauth2Client.setCredentials(tokens);
            response.json(tokens)
        } else {
            response.status(503).json(err);
        }

    });
});
module.exports = app;