require.config({

    baseUrl: "",

    // alias libraries paths
    paths: {
        "app-config": "Scripts/app/app-config",
        "angular": "Scripts/angular",
        "angular-route": "Scripts/angular-route",
        "angularAMD": "Scripts/angularAMD",
        "ui-bootstrap": "Scripts/angular-ui/ui-bootstrap-tpls",
        "angular-sanitize": "Scripts/angular-sanitize",
        "blockUI": "Scripts/angular-block-ui",
        "alertService": "Scripts/app/services/alertService",
        "ajaxService": "Scripts/app/services/mockAjaxService",
        "app-mock": "Scripts/app/app-ajax-response-mock",/*only for test*/
        "mainService": "Scripts/app/services/mainService",
        "accountService": ""
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        "angularAMD": ["angular"],
        "angular-route": ["angular"],
        "blockUI": ["angular"],
        "ui-bootstrap": ["angular"],
        "angular-sanitize":["angular"]
    },

    // kick start application
    deps: ["app-config"]
});