"use strict";
define(["app-config", "alertService"], function (app) {

    app.register.controller("loginController", ["$scope", "$rootScope", "alertService",
        function ($scope, $rootScope, alertService) {
            $rootScope.closeAlert = alertService.closeAlert;
            $rootScope.alerts = [];

            $scope.initController = function () {
                $scope.Username = "1";
                $scope.Password = "2";
                alertService.RenderSuccessMessage("Please register if you do not have an account.");
            };
        }]);
});