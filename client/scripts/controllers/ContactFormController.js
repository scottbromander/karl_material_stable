 //'core'??????

 //added var myApp and changed 'core' to myApp
 var myApp = angular.module('myApp', ['ngMaterial']);

 myApp.controller('ContactFormController', ['$scope', '$http', '$mdToast','$animate',
    function($scope, $http, $mdToast, $animate){
    console.log("Blah");
        //$scope.toastPosition = angular.extend({},last);
        //$scope.getToastPosition = function() {
        //    sanitizePosition();
        //    return Object.keys($scope.toastPosition)
        //        .filter(function(pos) { return $scope.toastPosition[pos]; })
        //        .join(' ');
        //};
        //                            //positioning for toast message
        //function sanitizePosition() {
        //    var current = $scope.toastPosition;
        //    if ( current.bottom && last.top ) current.top = false;
        //    if ( current.top && last.bottom ) current.bottom = true;
        //    if ( current.right && last.left ) current.left = false;
        //    if ( current.left && last.right ) current.right = true;
        //    last = angular.extend({},current);
        //}
        //this.sendMail = function() {
        //
        //    var data = ({
        //        contactName : this.contactName,
        //        contactEmail: this.contactEmail,
        //        contactMsg : this.contactMsg
        //    });
        //
        //    $http.post('/contact-form', data).
        //       success(function(data, status, headers, config) {
        //
        //            //Toast thank you message
        //            $mdToast.show(
        //                $mdToast.simple()
        //                    .content('Thanks for your message! ' + data.contactName + 'look forward to talking to you soon!')
        //                    .position($scope.getToastPosition())
        //                    .hideDelay(5000)
        //            );
        //
        //        }).
        //        error(function(data, status, headers, config){
        //
        //        });
        //
        //        //change length of message staying on screen.
        //};
 }]);
