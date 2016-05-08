'use strict';

var furnitureDirectives = angular.module('furnitureDirectives', []);

furnitureDirectives
    
    .directive('sendOrderButton', ['sendOrderAction', '$rootScope',
        function (sendOrderAction, $rootScope) {
            return {
                restrict: 'C',
                link: function (scope, element) {
                    element.bind('click', function (event) {
                        var packet = {
                            username: $rootScope.$storage.username,
                            properties: [],
                            values: []
                        };
                        for (var i = 0; i < scope.productProperties.length; i++) {
                            packet.properties.push(scope.productProperties[i].name);
                            packet.values.push(String(scope.productProperties[i].value));
                        }
                        sendOrderAction.doOrder(packet);
                    });
                }
            }
        }
    ]);
