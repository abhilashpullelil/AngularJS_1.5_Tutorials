
angular.module('myApp', ['coreModule']);

angular.module('myApp').controller('firstController', ['$scope', 'version', '$http', 'baseUrl', 'sharedData', function ($scope, version, $http, baseUrl, sharedData) {
    debugger;
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
.controller('secondController', ['$scope', 'firstVersion', 'sharedData', function ($scope, firstVersion, sharedData) {
    $scope.baseVersion = firstVersion;

    $scope.name = sharedData.UserName;

    //$scope.updateNameFromFactory = function () {
    //    $scope.name = sharedData.UserName;
    //}

    $scope.$on('name_has_been_changed', function (event, params) {
        debugger;
        $scope.name = sharedData.UserName;
    });
}]);
