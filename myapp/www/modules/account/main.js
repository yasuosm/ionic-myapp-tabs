define([
	'account/controllers/account',
	'text!account/templates/tab-account.html'
], function() {

    angular.module('starter').config(function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('tab.account', {
            url: '/account',
            views: {
                'tab-account': {
                    template: require('text!account/templates/tab-account.html'),
                    controller: 'AccountCtrl'
                }
            }
        });
    });
});