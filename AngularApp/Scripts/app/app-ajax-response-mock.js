/* http://beta.json-generator.com/ */
define(function () {
    var menuItems = [
        { "MenuId": 1, "Description": "Home", "Route": "javascript:alert('Home');", "Module": "", "MenuOrder": 1, "RequiresAuthenication": true },
        { "MenuId": 2, "Description": "About", "Route": "javascript:alert('About');", "Module": "", "MenuOrder": 2, "RequiresAuthenication": true },
        { "MenuId": 3, "Description": "Contact", "Route": "javascript:alert('Contact');", "Module": "", "MenuOrder": 3, "RequiresAuthenication": true }
    ];

    var api_main_InitializeApplication_response = {
        status: 200,
        data: {
            "MenuItems": menuItems,
            "IsAuthenicated": false,
            "ReturnMessage": "resource was not found."
        }
    };

    function getResponse(route) {
        if (route === "/api/main/InitializeApplication") {
            return api_main_InitializeApplication_response;
        }
        return {};
    }

    return{
        getResponse: getResponse
    }
});