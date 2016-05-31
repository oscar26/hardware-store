'use strict';

var orderDirectives = angular.module('orderDirectives', []);

orderDirectives.directive('sendOrderButton', ['sendOrderAction', '$rootScope',
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
                        if (scope.destination === "furniture") {
                            for (var i = 0; i < scope.productProperties.length; i++) {
                                packet.properties.push(scope.productProperties[i].internalName);
                                packet.values.push(String(scope.productProperties[i].value));
                                if (packet.values[i] === "true" && scope.productProperties[i].type === "checkbox")
                                    packet.values[i] = "1";
                                else if (scope.productProperties[i].type === "checkbox")
                                    packet.values[i] = "0";
                            }
                            if (packet.values[0] === "0") packet.values[0] = "3";
                        } else {
                            for (var i = 0; i < scope.productProperties.length; i++) {
                                packet.properties.push(scope.productProperties[i].name);
                                packet.values.push(String(scope.productProperties[i].value));
                            }
                        }
                        console.log(packet);
                        sendOrderAction.doOrder(packet, scope.destination);
                    });
                }
            }
        }
    ]);
