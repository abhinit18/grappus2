/**
 * Created by Abhinit on 9/21/2016.
 */


App.controller('signUpController', function ($scope, $http, $cookies, $cookieStore,$rootScope,$timeout, $state) {
//console.log(MY_CONSTANT.url);

    $scope.temp_user = {};
    $scope.EMAIL_REGEXP = /^([a-zA-Z0-9]{1}[a-zA-Z0-9.​_-]+)@([a-zA-Z0-9._​-]+)([.]{1})([a-zA-Z0-9]+)$/;
    $scope.stateChange = function(){
        $cookieStore.put('wholeData',$scope.temp_user);
        $('#myModal').modal('hide');
        $timeout(function(){
            $state.go('layout1.Profile');
        },1000);

    }

    $scope.ViewDetails  = function(){
        $('#myModal').modal('show');
    }
       $scope.ViewDetails();

    $scope.dismissModal = function(){
        $('#myModal').modal('hide');
    }

    //
    //$scope.$on("$destroy",function(){
    //    $scope.dismissModal();
    //});
    //



});


