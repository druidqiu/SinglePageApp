/** http://www.runoob.com/angularjs/angularjs-tutorial.html **/

var app = angular.module("myApp", []);

app.controller("HelloController", ["$scope", function ($scope) {
    $scope.greeting = { text: "Hello" };
    $scope.stun = function () {
        $scope.isDisabled = !$scope.isDisabled;
    }

    $scope.isError = false;
    $scope.isWarning = false;

    $scope.showError = function () {
        $scope.messageText = "This is an error";
        $scope.isError = true;
        $scope.isWarning = false;
    }
    $scope.showWarning = function () {
        $scope.messageText = "Just a warning. Please carry on.";
        $scope.isError = false;
        $scope.isWarning = true;
    }
}]);

app.controller("CartController", ["$scope", function ($scope) {
    $scope.bill = {};
    $scope.items = [
        { title: "Paint pots", quantity: 8, price: 3.55 },
        { title: "Polka pots", quantity: 5, price: 12.95 },
        { title: "Pebbles", quantity: 5, price: 6.95 }
    ];
    $scope.remove = function(index) {
        $scope.items.splice(index, 1);
    };
    //$scope.totalCart = function() {
    //    var total = 0;
    //    for (var i = 0; i < $scope.items.length; i++) {
    //        total = total + $scope.items[i].price * $scope.items[i].quantity;
    //    }
    //    return total;
    //};
    //$scope.subtotal = function () {
    //    return $scope.totalCart() - $scope.bill.discount;
    //};
    //function calculateDiscount(newValue, oldValue, scope) {
    //    console.log(newValue + " - " + oldValue);
    //    $scope.bill.discount = newValue > 100 ? 10 : 0;
    //}
    //$scope.$watch($scope.totalCart, calculateDiscount);
    var calculateTotals = function() {
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
    //$scope.$watch(calculateTotals);

}]);