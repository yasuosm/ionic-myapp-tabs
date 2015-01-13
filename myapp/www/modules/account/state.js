define([
    'text!account/templates/tab-account.html'
], function() {

    angular.module('starter').config(function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('tab.account', {
            url: '/account',
            views: {
                'tab-account': {
                    templateUrl: require('text!account/templates/tab-account.html'),
                    controller: 'AccountCtrl'
                }
            }
        });
    });
});