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
                [{value: "Light Red", imgUrl: ""}, {value: "White", imgUrl: ""},{value: "Glossy - Black", imgUrl: ""}],
                [{value: "Dark Red", imgUrl: ""}, {value: "Glossy - Black", imgUrl: ""}, {value: "Smooth - Ivory", imgUrl: ""}],
                [{value: "Light Red", imgUrl: ""}, {value: "White", imgUrl: ""}, {value: "Smooth - Black", imgUrl: ""}]
            ],

            // Choice 3
            ["Mecedora", "Sofa Unitario", "Sofa Unitario"],

            // Choice 4
            [
                [{value: "Dirt - Dark brown", imgUrl: ""}, {value: "Cardboard", imgUrl: ""}],
                [{value: "Green Polished", imgUrl: ""}, {value: "Smooth - Black", imgUrl: ""}, {value: "Smooth - Dark Forest Green", imgUrl: ""}],
                [{value: "Light Red", imgUrl: ""}, {value: "White", imgUrl: ""}, {value: "Smooth - Black", imgUrl: ""}]
            ],

            // Choice 5
            ["Mesa Centro", "Mesa Centro", "Mesa Centro"],

            // Choice 6
            [
                [{value: "Dirt - Dark brown", imgUrl: ""}, {value: "Cork - Coarse", imgUrl: ""}],
                [{value: "Dirt - Dark Brown", imgUrl: ""}, {value: "White Ash - Java", imgUrl: ""}, {value: "Cardboard", imgUrl: ""}],
                [{value: "Dirt - Dark brown", imgUrl: ""}, {value: "Plywood - Weathered", imgUrl: ""}]
            ],

            // Choice 7
            ["Lámpara", "Lámpara", "Lámpara"],

            // Choice 8
            [
                [{value: "Smooth - Light Orange", imgUrl: ""}, {value: "Smooth - Black", imgUrl: ""}],
                [{value: "Smooth - Ivory", imgUrl: ""}, {value: "Fine Textured - Black", imgUrl: ""}],
                [{value: "With Stone 1", imgUrl: ""}, {value: "Smooth - Medium Gray", imgUrl: ""}]
            ],

            // Choice 9
            [null, "Cuadro", null],

            [
                null,
                [{value: "Flaked Satin - Blue", imgUrl: ""}],
                null
            ],

            // Choice 10
            [null, "Bife", "Bife"],

            // Choice 11
            [
                null,
                [{value: "Dirt - Dark brown", imgUrl: ""}, {value: "Cardboard", imgUrl: ""}, {value: "Cork - Coarse", imgUrl: ""}],
                [{value: "Dirt - Dark Brown", imgUrl: ""}, {value: "White Ash - Java", imgUrl: ""}, {value: "Cardboard", imgUrl: ""}]
            ],

            // Choice 12
            [null, null, "Mesa Auxiliar"],

            // Choice 13
            [
                null,
                null,
                [{value: "Dirt - Dark brown", imgUrl: ""}, {value: "Cardboard", imgUrl: ""}]
            ],

            // Choice 14
            ["Espejo", null, null]
        ];

        var choiceTypes = [
            "none", "checkbox", "dropdown", "checkbox", "dropdown", "checkbox", "dropdown", "checkbox", "dropdown",
            "checkbox", "dropdown", "checkbox", "dropdown", "checkbox", "dropdown", "checkbox"
        ];

        var choiceNames = [
            "productoEscogido", "Sofá principal", "Color del sofá principal", "Mecedora", "Color de la mecedora",
            "Mesa Centro", "Color de la mesa centro", "Lampara", "Color de la lámpara", "Cuadros", "Color del cuadro", "Bife",
            "Color del Bife", "Mesa Auxiliar", "Color de la mesa auxiliar", "Espejo"
        ];

        var productForms = [[], [], []];

        for (var i = 0; i < productForms.length; i++) {
            for (var j = 0; j < choiceTypes.length; j++) {
                if (choiceTypes[j] === "none")
                    productForms[i].push({name: choiceNames[j], type: choiceTypes[j], value: i+1});
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