
angular.module("myApp.Pages").controller("contactusController", ['$scope', function ($scope) {
    // Contact us controller

    $scope.test = function () {
        debugger;

        var asd = $scope.contactForm.name.$valid;

        return false;
    }

}]);
