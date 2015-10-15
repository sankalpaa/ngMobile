angular.module('ngMobile', ['ngTouch'])
    .controller('home', ['$scope', function (scope) {
        scope.title = "Home Page";
        scope.clickMe = function() {
            alert("Yes");
        };
        scope.swipeLeft = function() {
            alert('left');
        };
        scope.swipeRight = function () {
            alert('Right');
        };
    }]);