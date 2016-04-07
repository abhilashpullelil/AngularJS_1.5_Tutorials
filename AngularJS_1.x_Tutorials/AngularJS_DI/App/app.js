
angular.module('myApp', ['coreModule']);

angular.module('myApp').controller('firstController', ['$scope', 'version', '$http', 'baseUrl', 'sharedData', function ($scope, version, $http, baseUrl, sharedData) {
    $scope.cntVersion = version;

    $scope.UserName = sharedData.UserName;
    $scope.Course = sharedData.Course;

    // Functions

    $scope.updateUserdata = function () {
        sharedData.UpdateUserName($scope.UserName);
    }

    $scope.$watch('UserName', function () {
        sharedData.UpdateUserName($scope.UserName);
    });
}])
.controller('secondController', ['$scope', 'firstVersion', 'sharedData', 'myService', 'hello', function ($scope, firstVersion, sharedData, myService, hello) {
    $scope.baseVersion = firstVersion;

    $scope.name = sharedData.UserName;

    debugger;
    $scope.myProvider = hello;

    $scope.sayHello = function () {
        hello.sayHello();
    }

    angular.forEach()
    //$scope.updateNameFromFactory = function () {
    //    $scope.name = sharedData.UserName;
    //}

    $scope.$on('name_has_been_changed', function (event, params) {
        $scope.name = sharedData.UserName;
    });
}])

.config(function (helloProvider) {
    debugger;
    helloProvider.setName("Aroma");
});
