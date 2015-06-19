requirejs.config({
    baseUrl: '.',
    paths: {
        bootstrap: 'global/bootstrap',
        ini: 'global/ini',
        ionicBundle: 'lib/ionic/js/ionic.bundle',
        text: 'lib/requirejs-text/text'
    },
    packages: [{
        name: 'config',
        location: 'config'
    }, {
        name: 'account',
        location: 'modules/account'
    }, {
        name: 'chat',
        location: 'modules/chat'
    }, {
        name: 'core',
        location: 'modules/core'
    }, {
        name: 'dash',
        location: 'modules/dash'
    }],
    shim: {
        'ini': {
            deps: ['ionicBundle']
        },
        'bootstrap': {
            deps: ['ini']
        }
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs([
    'bootstrap'
]);