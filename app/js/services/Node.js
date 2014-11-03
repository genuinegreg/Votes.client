
angular.module('Votes.client').factory('Node', function (restmod) {

    var Node = restmod.model('http://localhost:1337/node');

    return Node;

});