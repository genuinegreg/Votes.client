angular.module('Votes.client')
    .controller('NodeCtrl', ['$scope', 'Node', function ($scope, Node) {
        $scope.nodes = Node.$search({});
    }]);