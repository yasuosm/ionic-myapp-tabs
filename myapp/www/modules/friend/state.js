define([
    'text!friend/templates/tab-friends.html',
    'text!friend/templates/friend-detail.html'
], function() {

    angular.module('starter').config(function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('tab.friends', {
            url: '/friends',
            views: {
                'tab-friends': {
                    templateUrl: require('text!friend/templates/tab-friends.html'),
                    controller: 'FriendsCtrl'
                }
            }
        }).state('tab.friend-detail', {
            url: '/friend/:friendId',
            views: {
                'tab-friends': {
                    templateUrl: require('text!friend/templates/friend-detail.html'),
                    controller: 'FriendDetailCtrl'
                }
            }
        });
    });
});