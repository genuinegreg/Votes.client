angular.module('Votes.client').factory('Node', function(restmod) {
    return restmod.model('http://localhost:1337/node');
});