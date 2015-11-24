var myApp = angular.module("myApp", ['ngRoute', 'ngAnimate', 'ngMaterial']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/header', {
            templateUrl: "/assets/views/templates/header.html"
        }).
        when('/hero', {
            templateUrl: "/assets/views/templates/hero.html"
        }).
        when('/pinder', {
            templateUrl: "/assets/views/templates/pinder.html"
        }).
        when('/about', {
            templateUrl: "/assets/views/templates/about.html"
        }).
        when('/portfolio', {
            templateUrl: "/assets/views/templates/portfolio.html"
        }).
        when('/contact', {
            templateUrl: "/assets/views/templates/contact.html"
        }).
        when('/footer', {
           templateUrl: "/assets/views/templates/footer.html"
    })
}]);

//change from copied app.controller
myApp.controller('TestCtrl', function($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
        $location.hash(id);

        console.log($location.hash());

        $anchorScroll();
    }
});

//contactForm.html angular.module
