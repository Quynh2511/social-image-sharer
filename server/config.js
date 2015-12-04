module.exports = {

    phantom: {
        path: __dirname + '/node_modules/.bin/'
    },

    server: {
        ip: '0.0.0.0',
        port: '3000'
    },

    renderer: {
        outputDirectory: __dirname + '/public',
        linkTemplate: 'http://localhost:3000/%FILE%',
        format: 'png',
        quality: 100
    },

    sharer: {
        facebook: {

        },
        google: {

        },
        twitter: {

        },
        instagram: {

        }
    }

};