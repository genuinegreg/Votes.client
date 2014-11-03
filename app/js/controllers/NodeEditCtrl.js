angular.module('Votes.client')
    .controller('NodeEditCtrl', ['$scope', '$state', 'node', function ($scope, $state, node) {

        $scope.save = function () {

            console.log(node.start);

            node.$save();
            $state.go('^')

        };

        $scope.cancel = function () {
            node.$fetch();
            $state.go('^')
        };

    }]);