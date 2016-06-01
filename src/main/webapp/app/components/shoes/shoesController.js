'use strict';

var shoesController = angular.module('shoesController', []);

shoesController.controller('shoesCtrl', ['$scope',
    function ($scope) {
        $scope.destination = "shoes";

        // Fields choices
        var sizes = [{value: "34", imgUrl: ""}, {value: "35", imgUrl: ""}, {value: "36", imgUrl: ""},
            {value: "37", imgUrl: ""}, {value: "38", imgUrl: ""}, {value: "39", imgUrl: ""},
            {value: "40", imgUrl: ""}, {value: "41", imgUrl: ""}, {value: "42", imgUrl: ""}];
        var materials = [{value: "Cuero", imgUrl: ""}, {value: "Gamuza", imgUrl: ""},{value: "Sintético", imgUrl: ""},
            {value: "Charol", imgUrl: ""}, {value: "Malla", imgUrl: ""}];
        var colours = [
            {value: "Aguamarina", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AAAnIlPj-pRFmJ_t5k9IgcrNa/aguamarina.PNG?dl=1"},
            {value: "Amarillo", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AABEmuH2kGCG2ifLL7Qvtgl1a/amarillo.PNG?dl=1"},
            {value: "Amarillo quemado", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AAB4i7c8_tbmLREtBYKLnLI3a/amarilloquemado.PNG?dl=1"},
            {value: "Azul claro", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AABIgAPiJObTwNPkO42dp1kHa/azulclaro.PNG?dl=1"},
            {value: "Azul oscuro", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AACemBF_KuONDNRAeSyOCzLoa/azuloscuro.PNG?dl=1"},
            {value: "Azul rey", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AAAXYZyKZGB-arhBwOuC6p-ua/azulrey.PNG?dl=1"},
            {value: "Blanco", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AAC5JQ271Y8DaceW8LFxtkMia/blanco.PNG?dl=1"},
            {value: "Café claro", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AACdZ7bm49nRBT8-d_M_5lzha/cafeclaro.PNG?dl=1"},
            {value: "Café oscuro", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AABMNjW3j02-8n4KXP2WOmTla/cafeoscuro.PNG?dl=1"},
            {value: "Crema", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AAAnqEkXVBEJBfdDQeKO6xIBa/crema.PNG?dl=1"},
            {value: "Crudo", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AAD5HZYYseGuwY3NnZoLOC0Ga/crudo.PNG?dl=1"},
            {value: "Fucsia", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AABkUXneWUM3wUbfzka4Lgnna/fucsia.PNG?dl=1"},
            {value: "Habano", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AAAqEV7-tL99mjzBSqGBbLbfa/habano.PNG?dl=1"},
            {value: "Lila", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AAB-oJZmKQn7LTOvtNvj-5cba/lila.PNG?dl=1"},
            {value: "Morado", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AAB4P2l1zKChf8lxVB-BGnLLa/morado.PNG?dl=1"},
            {value: "Naranja", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AADUlEeCh75qoKKeZSKhF-Lha/naranja.PNG?dl=1"},
            {value: "Negro", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AAAu8ZObYGGA2y_0HC17kkmKa/negro.PNG?dl=1"},
            {value: "Rojo", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AAAjPHod1zvysjBLAMJra_s0a/rojo.PNG?dl=1"},
            {value: "Rojo oscuro", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AADKjKjOs8M-O32nprXzVmL2a/rojooscuro.PNG?dl=1"},
            {value: "Rosado", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AAC804hbfCK2o_4k3HH5wqzUa/rosado.PNG?dl=1"},
            {value: "Verde", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AAA9j6vut4rHXrRI63HHCmHJa/verde.PNG?dl=1"},
            {value: "Verde biche", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AADM_z63GAJMHHWX50OYqYTea/verdebiche.PNG?dl=1"},
            {value: "Verde claro", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AABwDPhWEmRwIIFawesfld2ma/verdeclaro.PNG?dl=1"},
            {value: "Verde oliva", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AAC1Htohhos3Rsv8ht1wn-OIa/verdeoliva.PNG?dl=1"},
            {value: "Verde oscuro", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AADMyj73M2FAF0kIduCMbC_ta/verdeoscuro.PNG?dl=1"},
            {value: "Vino tinto", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AADIESmHX1MKzxNraJCbW2A2a/vinotinto.PNG?dl=1"},
            {value: "Violeta", imgUrl: "https://www.dropbox.com/sh/ljjtgkvm07b9a2b/AADp01J80t92QNjLOC91-MN1a/violeta.PNG?dl=1"},
        ];

        // Fields in spanish for compatibility with the other groups
        $scope.productProperties = [
            { name: "Tipo", type: "none", value: 0},
            { name: "Talla", type: "dropdown", value: sizes[0].value, options: { choices: sizes } },
            { name: "Material principal", type: "dropdown", value: materials[0].value, options: { choices: materials } },
            { name: "Material secundario", type: "dropdown", value: materials[0].value, options: { choices: materials } },
            { name: "Color principal", type: "dropdown", value: colours[0].value, img: colours[0].imgUrl, options: { choices: colours, hasImage: true } },
            { name: "Color secundario", type: "dropdown", value: colours[0].value, img: colours[0].imgUrl, options: { choices: colours, hasImage: true } },
            { name: "Color parte trasera", type: "dropdown", value: colours[0].value, img: colours[0].imgUrl, options: { choices: colours, hasImage: true } },
            { name: "Color cordones", type: "dropdown", value: colours[0].value, img: colours[0].imgUrl, options: { choices: colours, hasImage: true } },
        ];
        
        $scope.changeChoice = function (fieldName, newChoice) {
            for (var i = 0; i < $scope.productProperties.length; i++) {
                if ($scope.productProperties[i].name === fieldName) {
                    $scope.productProperties[i].value = newChoice.value;
                    $scope.productProperties[i].img = newChoice.imgUrl;
                    break;
                }
            }            
        };
    }
]);
