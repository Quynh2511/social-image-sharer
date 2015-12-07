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
            accessToken: 'CAATm337DLMYBAEEdBMouZB06AtKaXDaQuZCJVqtCijGadMhREbkGkk20dFhmp7MIV48ZCnL0YXywvBj312Nc0LQ9IQlRZC4qVrgOA0yXB3z4DFpdZC0DyRuRnHWgvMxsnMiuLT2N0TjbegyxN9kp8WcZA5CryCtCgoG7OLOKNemXOeGaacAB8KaCCkafwDGGkZAO9nuiHukkMqm1QhCATEk',
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
            status: 'Test',
            apiVersion: '1.1'
        }
    }

};