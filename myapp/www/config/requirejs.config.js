requirejs.config({
    baseUrl: './www/',
    paths: {
        bootstrap: 'global/bootstrap',
        ini: 'global/ini',
        angular: 'lib/angular/angular',
        angularAnimate: 'lib/angular-animate/angular-animate',
        angularSanitize: 'lib/angular-sanitize/angular-sanitize',
        angularUiRouter: 'lib/angular-ui-router/release/angular-ui-router',
        ionicAngular: 'lib/ionic/js/ionic-angular',
        ionicBundle: 'lib/ionic/js/ionic.bundle',
        ionic: 'lib/ionic/js/ionic',
        text: 'lib/requirejs-text/text'
    },
    packages: [{
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
    }, {
        name: 'friend',
        location: 'modules/friend'
    }]
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs([
    'ionicBundle',
    'ini',
    // modules
    'account',
    'chat',
    'core',
    'dash',
    'friend',
    // manual bootstrapping app
    'bootstrap'
]);