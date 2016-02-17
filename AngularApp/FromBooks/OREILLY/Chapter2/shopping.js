var shoppingModule = angular.module("ShoppingModule", []);

shoppingModule.factory("Items", function() {
    var items = {};
    items.query = function() {
        //In real apps, we'd pull this data from the server...
        return [
            { title: "Paint pots", quantity: 8, price: 3.55 },
            { title: "Polka pots", quantity: 5, price: 12.95 },
            { title: "Pebbles", quantity: 5, price: 6.95 }
        ];
    };
    return items;
});
shoppingModule.filter("titleCase", function() {
    var titleCaseFilter = function(input) {
        var words = input.split(" ");
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(" ");
    };
    return titleCaseFilter;
});

shoppingModule.controller("ShoppingController", ["$scope", "Items", function($scope,Items) {
    $scope.bill = {};
    $scope.items = Items.query();
    var calculateTotals = function () {
        var total = 0;
        for (var i = 0; i < $scope.items.length; i++) {
            total = total + $scope.items[i].price * $scope.items[i].quantity;
        }

        $scope.bill.total = total;
        $scope.bill.discount = total > 100 ? 10 : 0;
        $scope.bill.subtotal = total - $scope.bill.discount;
        console.log("Function calculateTotals is called.");
    };
    $scope.$watch("items", calculateTotals, true);
}]);