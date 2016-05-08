'use strict';

var productListController = angular.module('productListController', []);

productListController.controller('productListCtrl', ['$scope', '$rootScope', 'LxDialogService',
    function ($scope, $rootScope, LxDialogService) {

        $scope.searchOptions = {
            term: ""
        };

        $scope.dialogOptions = {
            dialogId: 'extra-info-dialog',
            selectedItemId: undefined
        };
        
        $scope.addToShoppingCart = function (itemId) {
            if ($rootScope.$storage.shoppingCart == null) {
                $rootScope.$storage.shoppingCart = new Array();
            } else {
                $rootScope.$storage.shoppingCart.push(itemId);
            }
            console.log(itemId);
        };

        $scope.openDialog = function (itemId, companyId) {
            // Set data first
            console.log("Opening dialog with itemId-companyId: ", itemId, companyId);
            $scope.dialogOptions.selectedItemId = itemId;
            LxDialogService.open($scope.dialogOptions.dialogId);
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
