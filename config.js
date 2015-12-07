module.exports = {

    templateUrl: '',
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
        format: 'jpeg',
        quality: 100
    },

    sharer: {
        facebook: {
            appId: '1379747485658310',
            appSecret: 'c337805df3ff9299c5aa46aa42d3d2b3',
            accessToken: 'CAATm337DLMYBAE9Bc7xuMnfIS1ozRIVKYGPnmIdYnQpTzq7t4T8ZAvmR6GmXIAZByTEqI8didsyK5WUmqCvZALspfwV0r3IoJJpuZC716aP7pjRqtkosJ618H1U0xefBKMoEOq2RkZBZBUnqPAq6i11QWIA8wBHdwZAd35dfujmqdlNN2Ma2M71LyrkK3IMlNZCQe2IqAYDmmmcfBBycwnv0',
            apiVersion: 2.5
        },
        google: {

        },
        twitter: {
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
            status: null,
            apiVersion: '1.1'
        }
    }

};