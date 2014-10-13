'use strict';

angular.module('Votes.client', ['restmod', 'ui.router', 'ngTouch', 'ngSanitize', 'ngAnimate'])
    .config(function ($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/list");
        //
        // Now set up the states
        $stateProvider
            .state('root', {
                abstact: true,
                templateUrl: 'views/root.html'
            })
            .state('root.nodes', {
                url: "/list",
                templateUrl: "views/root.nodes.html",
                controller: 'NodeCtrl'
            })
            .state('root.node', {
                url: '/node/:nodeId',
                templateUrl: 'views/root.node.html',
                resolve: {
                    node: function(Node, $stateParams) {
                        console.log('resolve', $stateParams.nodeId);
                        return Node.$find($stateParams.nodeId);
                    }
                },
                controller: function(node, $scope) {
                    console.log(node)
                    $scope.node = node;
                }
            })
            .state('root.node.edit', {
                url: "/edit",
                templateUrl: "views/root.node.create.html",
                controller: 'NodeCreateCtrl'
            })
    });