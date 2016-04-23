'use strict';

var productListController = angular.module('productListController', []);

productListController.controller('productListCtrl', ['$scope',
    function ($scope) {
        $scope.searchOptions = {
            term: ""
        };

        $scope.$watch(
            function searchTermWatch(scope) {
                return scope.searchOptions.term;
            },
            function searchTermListener(newValue, oldValue) {
                console.log("searchOptions", newValue);
            }
        );
    }
]);
