define([
    'text!chat/templates/tab-chats.html',
    'text!chat/templates/chat-detail.html'
], function() {

    angular.module('starter').config(function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('tab.chats', {
            url: '/chats',
            views: {
                'tab-chats': {
                    templateUrl: require('text!chat/templates/tab-chats.html'),
                    controller: 'ChatsCtrl'
                }
            }
        }).state('tab.chat-detail', {
            url: '/chats/:chatId',
            views: {
                'tab-chats': {
                    templateUrl: require('text!chat/templates/chat-detail.html'),
                    controller: 'ChatDetailCtrl'
                }
            }
        });
    });
});