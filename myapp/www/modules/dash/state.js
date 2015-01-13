define([
    'text!dash/templates/tab-dash.html'
], function() {

    angular.module('starter').config(function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('tab.dash', {
            url: '/dash',
            views: {
                'tab-dash': {
                    templateUrl: require('text!dash/templates/tab-dash.html'),
                    controller: 'DashCtrl'
                }
            }
        });
    });
});