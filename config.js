module.exports = {

    template : {
        winner: process.env['TEMPLATE_WINNER_URL'] || 'http://localhost:3000/rendering/winner',
        'new-bidder': process.env['TEMPLATE_NEW_BIDDER_URL'] || 'http://localhost:3000/rendering/new-bidder'
    },

    phantom: {
        path: process.env['PHANTOM_PATH'] || (__dirname + '/node_modules/.bin/')
    },

    server: {
        port: process.env['SERVER_PORT'] || '3000'
    },

    renderer: {
        outputDirectory: process.env['RENDERER_OUTPUT'] || (__dirname + '/public'),
        linkTemplate: process.env['RENDERER_LINK_TEMPLATE'] || 'http://localhost:3000/%FILE%',
        format: process.env['RENDERER_FORMAT'] || 'jpeg',
        quality: process.env['RENDERER_QUALITY'] || 100
    },

    sharer: {
        facebook: {
            appId: process.env['SHARER_FACEBOOK_APP_ID'] || '1379747485658310',
            appSecret: process.env['SHARER_FACEBOOK_APP_SECRET'] || 'c337805df3ff9299c5aa46aa42d3d2b3',
            accessToken: process.env['SHARER_FACEBOOK_ACCESS_TOKEN'] || 'CAATm337DLMYBAE9Bc7xuMnfIS1ozRIVKYGPnmIdYnQpTzq7t4T8ZAvmR6GmXIAZByTEqI8didsyK5WUmqCvZALspfwV0r3IoJJpuZC716aP7pjRqtkosJ618H1U0xefBKMoEOq2RkZBZBUnqPAq6i11QWIA8wBHdwZAd35dfujmqdlNN2Ma2M71LyrkK3IMlNZCQe2IqAYDmmmcfBBycwnv0',
            apiVersion: process.env['SHARER_FACEBOOK_API_VERSION'] || 2.5
        },
        google: {

        },
        twitter: {
            oauth: {
                consumer: {
                    'public': process.env['SHARER_TWITTER_CONSUMER_PUBLIC'] || 'e9i5XWtMDVR21NMuv0lMgDZpy',
                    'secret': process.env['SHARER_TWITTER_CONSUMER_SECRET'] || 'PQitQYHLXAChEd5StKCqVCUdS5aSnvYdlgGz9pSCU9942OJcqu'
                },
                signature_method: 'HMAC-SHA1'
            },
            token: {
                'public': process.env['SHARER_TWITTER_TOKEN_PUBLIC'] || '1590979938-BDvHlgGJwBRZNi0038KGnUIzBB5jNuuC3zpCOVm',
                'secret': process.env['SHARER_TWITTER_TOKEN_SECRET'] || 'k606voP0YMP6xdggwe1iqyfmVo6TaUpLZpSaBcf2qDzPO'
            },
            status: '',
            apiVersion: process.env['SHARER_TWITTER_API_VERSION'] || 1.1
        }
    }

};