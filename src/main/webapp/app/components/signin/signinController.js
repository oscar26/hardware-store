'user strict';

var signinController = angular.module('signinController', []);

signinController.controller('signinCtrl', ['$scope',
    function ($scope) {
        $scope.user = {
            username: "Usuario o correo electrónico",
            password: "Contraseña"
        };
        $scope.bgImage = {
            height: '100vh',
            background: 'url(http://www.planwallpaper.com/static/images/i-should-buy-a-boat.jpg)'
        }
    }
]);
