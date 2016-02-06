"use strict";

define(["angularAMD", "angular-route", "ui-bootstrap", "angular-sanitize", "blockUI"], function (angularAMD) {
    var app = angular.module("mainModule", ["ngRoute", "blockUI", "ngSanitize", "ui.bootstrap"]);

    app.config(function ($httpProvider) {
        $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
        $httpProvider.defaults.withCredentials = true;
    });

    app.config(function (blockUIConfig) {
        // Change the default overlay message
        blockUIConfig.message = "executing...";
        // Change the default delay to 100ms before the blocking is visible
        blockUIConfig.delay = 1;
        // Disable automatically blocking of the user interface
        blockUIConfig.autoBlock = false;
    });

    app.config([
        "$compileProvider", function($compileProvider) {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|sms|javascript):/);
        }
    ]);

    app.config([
        "$routeProvider", function($routeProvider) {
            $routeProvider.when("/", angularAMD.route({
                templateUrl: function() { return "Views/Main/default.html?" + new Date(); },
                controllerUrl: "Views/Main/DefaultController"
            })).when("/:section/:tree", angularAMD.route({
                templateUrl: function (rp) { return "Views/" + rp.section + "/" + rp.tree + ".html?" + new Date(); },
                resolve: {
                    load:["$q","$rootScope","$location", function($q, $rootScope, $location) {
                        var path = $location.path();
                        var parsePath = path.split("/");
                        var parentPath = parsePath[1];
                        var controllerName = parsePath[2];
                        var loadController = "Views/" + parentPath + "/" + controllerName + "Controller";
                        var defferred = $q.defer();
                        require([loadController], function() {
                            $rootScope.$apply(function() {
                                defferred.resolve();
                            });
                        });
                        return defferred.promise;
                    }]
                }
            })).when("/:section/:tree/:id", angularAMD.route({
                templateUrl: function (rp) { return "Views/" + rp.section + "/" + rp.tree + ".html?" + new Date(); },
                resolve: {
                    load: ["$q", "$rootScope", "$location", function ($q, $rootScope, $location) {
                        var path = $location.path();
                        var parsePath = path.split("/");
                        var parentPath = parsePath[1];
                        var controllerName = parsePath[2];
                        var loadController = "Views/" + parentPath + "/" + controllerName + "Controller";
                        var defferred = $q.defer();
                        require([loadController], function () {
                            $rootScope.$apply(function () {
                                defferred.resolve();
                            });
                        });
                        return defferred.promise;
                    }]
                }
            })).otherwise({ redirectTo: "/" });
        }
    ]);

    app.controller("indexController", [
        "$scope", "$rootScope", "$http", "$location", "blockUI",
        function ($scope, $rootScope, $http, $location, blockUI) {

            $scope.initController = function () {

                $rootScope.displayContent = false;
                if ($location.path() !== "") {
                    
                }
            };
        }
    ]);


    // Bootstrap Angular when DOM is ready
    angularAMD.bootstrap(app);

    return app;
});