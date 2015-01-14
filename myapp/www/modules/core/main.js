define([
    'text!core/templates/tabs.html'
], function() {

    angular.module('starter').config(function($stateProvider, $urlRouterProvider) {

        // setup an abstract state for the tabs directive
        $stateProvider.state('tab', {
            url: "/tab",
            abstract: true,
            template: require('text!core/templates/tabs.html')
        });
    });
});