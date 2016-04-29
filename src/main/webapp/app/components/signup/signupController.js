'user strict';

var signinController = angular.module('signupController', []);

signinController.controller('signupCtrl', ['$scope',
    function ($scope) {
        $scope.user = {
            accountid: null,
            name: "Nombre",
            lastname: "Apellido",
            address: "Dirección",
            customerid: "Documento de identidad",
            idtype: 0,
            phone: "Teléfono",
            mail: "Correo electrónico",
            username: "Usuario",
            password: "Contraseña",
            placedorders: null

        };
        $scope.bgImage = {
            height: '100vh',
            background: 'url(http://www.planwallpaper.com/static/images/i-should-buy-a-boat.jpg)'
        }
    }
]);
