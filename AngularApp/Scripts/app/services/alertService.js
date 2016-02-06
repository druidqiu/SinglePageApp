define(["app-config"], function(app) {
    app.register.service("alertService", [
        "$rootScope", function($rootScope) {

            $rootScope.alerts = [];
            $rootScope.MessageBox = "";

            this.SetValidationErrors = function(scope, validationErrors) {
                for (var prop in validationErrors) {
                    if (validationErrors.hasOwnProperty(prop)) {
                        var property = prop + "InputError";
                        scope[property] = true;
                    }
                }
            };

            function formatMessage(message) {
                var messageBox = "";
                if (angular.isArray(message) === true) {
                    for (var i = 0; i < message.length; i++) {
                        messageBox = messageBox + message[i] + "<br/>";
                    }
                } else {
                    messageBox = message;
                }

                return messageBox;
            }

            this.RenderSuccessMessage = function(message) {
                var messageBox = formatMessage(message);
                $rootScope.alerts = [];
                $rootScope.MessageBox = messageBox;
                $rootScope.alerts.push({ "type": "success", "msg": "" });
            };

            this.RenderInformationalMessage = function(message) {
                var messageBox = formatMessage(message);
                $rootScope.alerts = [];
                $rootScope.MessageBox = messageBox;
                $rootScope.alerts.push({ "type": "info", "msg": "" });
            };

            this.RenderWarningMessage = function(message) {
                var messageBox = formatMessage(message);
                $rootScope.alerts = [];
                $rootScope.MessageBox = messageBox;
                $rootScope.alerts.push({ "type": "warning", "msg": "" });
            };

            this.RenderErrorMessage = function(message) {
                var messageBox = formatMessage(message);
                $rootScope.alerts = [];
                $rootScope.MessageBox = messageBox;
                $rootScope.alerts.push({ "type": "danger", "msg": "" });
            };
        }
    ]);
});