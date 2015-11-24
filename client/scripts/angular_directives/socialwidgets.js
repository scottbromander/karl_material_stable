//social media share links in footer
//http://www.ninjajournal.com/use-googles-angularjs-directives-to-quickly-add-social-media-elements-to-your-website/

var ninja = angular.module('NINJA',[]);

ninja.directive('socialNinja', function(){
    return {
        restrict: 'E',
        templateUrl: "js/template/social.html"

    }
});