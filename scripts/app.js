angular.module('ngMobile', [])
    .controller('home', ['$scope', function (scope) {
        scope.title = "Home Page";
        scope.clickMe = function() {
            alert("Yes");
        };
    }]);