define([
    'friend/controllers/friend-detail',
    'friend/controllers/friends',
    'friend/services/friends',
    'text!friend/templates/tab-friends.html',
    'text!friend/templates/friend-detail.html'
], function() {

    angular.module('starter').config(function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('tab.friends', {
            url: '/friends',
            views: {
                'tab-friends': {
                    template: require('text!friend/templates/tab-friends.html'),
                    controller: 'FriendsCtrl'
                }
            }
        }).state('tab.friend-detail', {
            url: '/friend/:friendId',
            views: {
                'tab-friends': {
                    template: require('text!friend/templates/friend-detail.html'),
                    controller: 'FriendDetailCtrl'
                }
            }
        });
    });
});