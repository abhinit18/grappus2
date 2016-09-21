
App.controller('WelcomeController', function ($scope, $http, $cookies, $cookieStore,$rootScope,$timeout, $state) {
//console.log(MY_CONSTANT.url);

    $scope.signUp = function(){
        $state.go('layout1.signUp');
    }


});