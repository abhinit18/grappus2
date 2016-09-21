/**
 * Created by Abhinit on 9/21/2016.
 */

App.controller('ProfileController', function ($scope, $http, $cookies, $cookieStore,$rootScope,$timeout, $state) {
//console.log(MY_CONSTANT.url);

console.log($cookieStore.get('wholeData'));


    $scope.userData = $cookieStore.get('wholeData');

    $scope.name = $scope.userData.first_name + " " + $scope.userData.last_name;
    $scope.email = $scope.userData.email;
    $scope.phoneNo = $scope.userData.phone_without_country_code;



    //$scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options){
    //    $('#myModal').modal('hide');
    //});

});