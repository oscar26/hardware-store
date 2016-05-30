'use strict';

var furnitureController = angular.module('furnitureController', []);

furnitureController.controller('furnitureCtrl', ['$scope',
    function ($scope) {
        $scope.destination = "furniture";

        var choice = [
            // Offset
            ["Offset"],

            // Choice 1
            ["Sofá principal", "Sofá principal", "Sofá principal"],

            // Choice 2
            [
                [{value: "Rojo", imgUrl: ""}, {value: "Turquesa", imgUrl: ""},{value: "Negro", imgUrl: ""}],
                [{value: "Gris", imgUrl: ""}, {value: "Azul oscuro", imgUrl: ""}, {value: "Café oscuro", imgUrl: ""}],
                [{value: "Negro", imgUrl: ""}, {value: "Azul oscuro ", imgUrl: ""}, {value: "Gris", imgUrl: ""}, {value: "Amarillo quemado", imgUrl: ""}],
            ],

            // Choice 3
            ["Mecedora", "Sofa U", "Sofa U"],

            // Choice 4
            [
                [{value: "Blanca", imgUrl: ""}, {value: "Negra", imgUrl: ""}],
                [{value: "Azul ", imgUrl: ""}, {value: "Verde", imgUrl: ""}, {value: "Gris", imgUrl: ""}],
                [{value: "Negro", imgUrl: ""}, {value: "Azul oscuro ", imgUrl: ""}, {value: "Gris", imgUrl: ""}, {value: "Amarillo quemado", imgUrl: ""}]
            ],

            // Choice 5
            ["Mesa Centro", "Mesa Centro", "Mesa Centro"],

            // Choice 6
            [
                null,
                [{value: "Café oscuro", imgUrl: ""}, {value: "Café claro", imgUrl: ""}, {value: "Café", imgUrl: ""}],
                [{value: "Negro", imgUrl: ""}, {value: "Café", imgUrl: ""}, {value: "Vinotinto ", imgUrl: ""}]
            ],

            // Choice 7
            ["Lámpara", "Lámpara", "Lámpara"],

            // Choice 8
            [
                [{value: "Blanca", imgUrl: ""}, {value: "Negra", imgUrl: ""}],
                [{value: "Blanca", imgUrl: ""}, {value: "Beige", imgUrl: ""}],
                null
            ],

            // Choice 9
            [null, "Cuadros", null],

            // Choice 10
            [null, "Bife", "Bife"],

            // Choice 11
            [
                null,
                [{value: "Café oscuro", imgUrl: ""}, {value: "Café claro", imgUrl: ""}, {value: "Café", imgUrl: ""}],
                [{value: "Negro", imgUrl: ""}, {value: "Café", imgUrl: ""}, {value: "Vinotinto", imgUrl: ""}]
            ],

            // Choice 12
            [null, null, "Mesa Auxiliar"],

            // Choice 13
            [
                null,
                null,
                [{value: "Negro", imgUrl: ""}, {value: "Café", imgUrl: ""}, {value: "Vinotinto ", imgUrl: ""}]
            ],

            // Choice 14
            ["Espejo", null, null]
        ];

        var choiceTypes = [
            "none", "checkbox", "dropdown", "checkbox", "dropdown", "checkbox", "dropdown", "checkbox", "dropdown",
            "checkbox", "checkbox", "dropdown", "checkbox", "dropdown", "checkbox"
        ];

        var choiceNames = [
            "productoEscogido", "Sofá principal", "Color del sofá principal", "Mecedora", "Color de la mecedora",
            "Mesa Centro", "Color de la mesa centro", "Lampara", "Color de la lámpara", "Cuadros", "Bife",
            "Color del Bife", "Mesa Auxiliar", "Color de la mesa auxiliar", "Espejo"
        ];

        var productForms = [[], [], []];

        for (var i = 0; i < productForms.length; i++) {
            for (var j = 0; j < choiceTypes.length; j++) {
                if (choiceTypes[j] === "none")
                    productForms[i].push({name: choiceNames[j], type: choiceTypes[j], value: i});
                if (choiceTypes[j] === "checkbox")
                    if (choice[j][i] != null)
                        productForms[i].push({name: choice[j][i], type: choiceTypes[j], value: false});
                if (choiceTypes[j] === "dropdown")
                    if (choice[j][i] != null)
                        productForms[i].push({name: choiceNames[j], type: choiceTypes[j], value: choice[j][i][0].value, options: {choices: choice[j][i], hasImage: false}});
            }
        }

        $scope.productProperties = productForms[0];

        // Fields in spanish for compatibility with the other groups
        // $scope.productProperties = [
        //     {name: "productoEscogido", type: "none", value: 0},
        //     {name: "dato1", type: "textfield", value: ""},
        //     {name: "dato2", type: "textfield", value: ""},
        //     {name: "dato3", type: "textfield", value: ""},
        //     {
        //         name: "dato4", type: "radioButton", value: "valor1",
        //         options: {
        //             values: ["valor1", "valor2", "valor3"]
        //         }
        //     },
        //     {
        //         name: "dato5", type: "radioButton", value: "valor1",
        //         options: {
        //             values: ["valor1", "valor2", "valor3", "valor4"]
        //         }
        //     },
        //     {
        //         name: "dato6", type: "dropdown", value: "valor1",
        //         options: {
        //             values: ["valor1", "valor2", "valor3", "valor4", "valor5"]
        //         }
        //     },
        //     {
        //         name: "dato7", type: "dropdown", value: "valor1",
        //         options: {
        //             values: ["valor1", "valor2", "valor3"]
        //         }
        //     },
        //     {
        //         name: "dato8", type: "checkbox", value: false
        //     },
        //     {
        //         name: "dato9", type: "checkbox", value: false
        //     }
        // ];

        $scope.currentTab = 0;

        $scope.changeTab = function (newTab) {
            $scope.productProperties = productForms[newTab];
            $scope.currentTab = newTab;
        };

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