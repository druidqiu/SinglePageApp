"use strict";
define(["app-config", "mainService", "alertService"], function (app) {

    app.register.controller("defaultController", [
        "$scope", "$rootScope", "mainService", "alertService", function ($scope, $rootScope, mainService, alertService) {
            $rootScope.closeAlert = alertService.closeAlert;

            $scope.initController = function() {
                mainService.initializeApplication($scope.initAppComplete, $scope.initAppError);
            };

            $scope.initAppComplete = function (response) {
                $rootScope.MenuItems = response.MenuItems;
                $rootScope.displayContent = true;
                if (response.IsAuthenicated === true) {
                    window.location = "/applicationMasterPage.html#/Customers/CustomerInquiry";
                }
                else {
                    // set timeout needed to prevent AngularJS from raising a digest error
                    setTimeout(function() {
                        window.location = "#Account/Login";
                    }, 10);
                }
            }

            $scope.initAppError = function (response) {
                if (!response.ReturnMessage) {
                    alertService.RenderErrorMessage("Service is invalid.");
                } else {
                    alertService.RenderErrorMessage(response.ReturnMessage);
                }
                
            }
        }
    ]);
});