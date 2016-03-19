

angular.module('coreModule', [])
    .value('version', 4.5)

    .constant('firstVersion', 1.0)

    .constant('baseUrl', 'http://deve/api/')

    .factory('sharedData', function ($rootScope) {
        var myFacory = {};
        myFacory.UserName = "Aroma";
        myFacory.Course = "AngularJS 1.5";
        //Update the user name
        myFacory.UpdateUserName = function (name) {
            myFacory.UserName = name;
            $rootScope.$broadcast('name_has_been_changed', {myId : 12});
        }
        return myFacory;
    });
