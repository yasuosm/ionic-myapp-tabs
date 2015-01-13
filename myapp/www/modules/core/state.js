define([
    'text!core/templates/tabs.html'
], function() {

    angular.module('starter').config(function($stateProvider, $urlRouterProvider) {

        // setup an abstract state for the tabs directive
        $stateProvider.state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: require('text!core/templates/tabs.html')
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/dash');
    });
});