

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
    })

    .service('myService', function () {
        this.myServiceName = "my Service 1";
        this.SayHello = function () {
            alert("Hello World !!!");
        }
    })

    .provider('hello', function () {

        this.name = "Abhi";

        this.$get = function () {
            var localVariable = this.name;
            return {
                sayHello: function () {
                    alert("Hello " + localVariable);
                }
            };

        }

        this.setName = function (name) {
            this.name = name;
        }

    })
;
