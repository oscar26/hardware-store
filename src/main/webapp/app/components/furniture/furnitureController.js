'use strict';

var furnitureController = angular.module('furnitureController', []);

furnitureController.controller('furnitureCtrl', ['$scope',
    function ($scope) {
        $scope.destination = "furniture";

        var choiceColours = [
            {value: "Light Red", imgUrl: "https://www.dropbox.com/s/enw76yt76gqzm2z/light_red.png?dl=1"},
            {value: "White", imgUrl: "https://www.dropbox.com/s/swlxejr0gawje42/white.png?dl=1"},
            {value: "Smooth - Black", imgUrl: "https://www.dropbox.com/s/0yg27svqvcrdwzi/smooth_black.png?dl=1"},
            {value: "Dirt - Dark brown", imgUrl: "https://www.dropbox.com/s/xntyscyl9gokbj4/dirt_dark_brown.png?dl=1"},
            {value: "Herringbone - Light Brown", imgUrl: "http://placehold.it/50x50"},
            {value: "Cherry- Natural Low Gloss", imgUrl: "https://www.dropbox.com/s/z67wgtuuxgklct4/cherry_natural_low_gloss.png?dl=1"},
            {value: "Plywood - Weathered", imgUrl: "https://www.dropbox.com/s/wan5uqx9rcvxolh/plywood_weathered.png?dl=1"},
            {value: "With Stone 1", imgUrl: "https://www.dropbox.com/s/pxsry67v3dhhqbm/with_stone_1.png?dl=1"},
            {value: "Smooth – Medium Gray", imgUrl: "https://www.dropbox.com/s/pg9u4u11xrq7ga0/smooth_medium_gray.png?dl=1"},
            {value: "Cardboard", imgUrl: "https://www.dropbox.com/s/fmxf9yt7ua9ated/cardboard.png?dl=1"},
            {value: "Glossy - Black", imgUrl: "https://www.dropbox.com/s/2q5uhyfyjagqv6e/glossy_black.png?dl=1"},
            {value: "Cork - Coarse", imgUrl: "https://www.dropbox.com/s/88ua1isynb548n7/cork_coarse.png?dl=1"},
            {value: "Smooth – Light Orange", imgUrl: "https://www.dropbox.com/s/iam0aeu2k82rmoz/smooth_light_orange.png?dl=1"},
            {value: "Dark Red", imgUrl: "https://www.dropbox.com/s/6ujh0gfc97zj5m5/dark_red.png?dl=1"},
            {value: "Glossy - Black", imgUrl: "https://www.dropbox.com/s/4diq3ojwsu1qz9e/glossy_black_2.png?dl=1"},
            {value: "Smooth - Ivory", imgUrl: "https://www.dropbox.com/s/qys25d4ls3sde8z/smooth_ivory.png?dl=1"},
            {value: "Green Polished", imgUrl: "https://www.dropbox.com/s/0gkyl714py1xjwe/green-polished.png?dl=1"},
            {value: "Smooth - Dark Forest Green", imgUrl: "https://www.dropbox.com/s/to53hepn6yvqvrf/smooth_dark_forest_green.png?dl=1"},
            {value: "White Ash - Java", imgUrl: "https://www.dropbox.com/s/rcx0ar9w85kxcen/white_ash_lava.png?dl=1"},
            {value: "Smooth - Ivory", imgUrl: "https://www.dropbox.com/s/rad2qmjkdditl4m/smooth_ivory_2.png?dl=1"},
            {value: "Fine Textured - Black", imgUrl: "https://www.dropbox.com/s/597wt6n0z7837t3/fine_textured_black.png?dl=1"},
            {value: "Flaked Satin - Blue", imgUrl: "https://www.dropbox.com/s/4euyuv83z73deoa/flaked_satin_blue.png?dl=1"}
        ];

        var choiceTypes = [
            "none",
            "checkbox", "dropdown", "checkbox", "dropdown", "checkbox", "dropdown", "checkbox", "dropdown",
            "checkbox", "dropdown", "checkbox", "dropdown", "checkbox", "dropdown", "checkbox", "dropdown"
        ];

        var choiceNames = [
            "productoEscogido",
            "Sofa Principal", "Color", "Sofa Unitario", "Color", "Mesa Centro", "Color", "Lampara",
            "Color", "Cuadros", "Color", "Bife", "Color", "Mesa Auxiliar", "Color", "Espejo", "Color"
        ];

        var choiceInternalNames = [
            "productoEscogido",
            "SofaPrincipal:1", "Color", "SofaUnitario:1", "Color", "MesaCentro:1", "Color", "Lampara:1",
            "Color", "Cuadros:1", "Color", "Bife:1", "Color", "MesaAuxiliar:1", "Color", "Espejo:1", "Color"
        ];

        var choices = [
            // Offset 0
            null,

            // Checkbox 1
            null,

            // Dropdown 1
            [
                [choiceColours[0], choiceColours[1], choiceColours[2]], // (Sebas) Sofá principal
                [choiceColours[0], choiceColours[1], choiceColours[10]], // (Manuela) Sofá principal
                [choiceColours[13], choiceColours[14], choiceColours[15]] // (Jenny) Sofá principal
            ],

            // Checkbox 2
            null,

            // Dropdown 2
            [
                [choiceColours[0], choiceColours[1], choiceColours[2]], // (Sebas) Sofá unitario
                [choiceColours[3], choiceColours[9]], // (Manuela) Mecedora
                [choiceColours[16], choiceColours[2], choiceColours[17]] // (Jenny) Sofá unitario
            ],

            // Checkbox 3
            null,

            // Dropdown 3
            [
                [choiceColours[3], choiceColours[6]], // (Sebas) Mesa Centro
                [choiceColours[3], choiceColours[11]], // (Manuela) Mesa Centro
                [choiceColours[3], choiceColours[18], choiceColours[9]] // (Jenny) Mesa Centro
            ],

            // Checkbox 4
            null,

            // Dropdown 4
            [
                [choiceColours[7], choiceColours[8]], // (Sebas) Lámpara
                [choiceColours[13], choiceColours[3]], // (Manuela) Lámpara
                [choiceColours[15], choiceColours[20]] // (Jenny) Lámpara
            ],

            // Checkbox 5
            null,

            // Dropdown 5
            [
                [], // (Sebas) Cuadros
                [], // (Manuela) Cuadros
                [choiceColours[21]] // (Jenny) Cuadros
            ],

            // Checkbox 6
            null,

            // Dropdown 6
            [
                [choiceColours[3], choiceColours[18], choiceColours[9]], // (Sebas) Bife
                [], // (Manuela) Bife
                [choiceColours[3], choiceColours[9], choiceColours[11]] // (Jenny) Bife
            ],

            // Checkbox 7
            null,

            // Dropdown 7
            [
                [choiceColours[3], choiceColours[9]], // (Sebas) Mesa aux
                [], // (Manuela) Mesa aux
                [] // (Jenny) Mesa aux
            ],

            // Checkbox 8
            null,

            // Dropdown 8
            [
                [], // (Sebas) Espejo
                ["Default"], // (Manuela) Espejo
                [] // (Jenny) Espejo
            ],
        ];

        var productForms = [[], [], []];

        for (var i = 0; i < productForms.length; i++) {
            productForms[i].push({name: choiceNames[0], type: choiceTypes[0], value: i, internalName: choiceInternalNames[0]});
            for (var j = 1; j < choiceTypes.length; j += 2) {
                if (choices[j+1][i].length !== 0) {
                    if (choices[j+1][i][0] === "Default") {
                        productForms[i].push({name: choiceNames[j], type: choiceTypes[j], value: false, internalName: choiceInternalNames[j]});
                        productForms[i].push({type: "none", internalName: choiceInternalNames[j+1], value: "Default"});
                    } else {
                        productForms[i].push({name: choiceNames[j], type: choiceTypes[j], value: false, internalName: choiceInternalNames[j]});
                        productForms[i].push({
                            name: choiceNames[j+1], type: choiceTypes[j+1], value: choices[j+1][i][0].value, img: choices[j+1][i][0].imgUrl,
                            options: {choices: choices[j+1][i], hasImage: true}, internalName: choiceInternalNames[j+1]
                        });
                    }
                } else {
                    productForms[i].push({type: "none", internalName: choiceInternalNames[j], value: "0"});
                    productForms[i].push({type: "none", internalName: choiceInternalNames[j+1], value: "Default"});
                }
            }
        }

        $scope.productProperties = productForms[0];

        $scope.currentTab = 0;

        $scope.changeTab = function (newTab) {
            $scope.productProperties = productForms[newTab];
            $scope.currentTab = newTab;
        };

        $scope.changeChoice = function (fieldName, newChoice, propertyIndex) {
            $scope.productProperties[propertyIndex].value = newChoice.value;
            $scope.productProperties[propertyIndex].img = newChoice.imgUrl;
        };
    }
]);