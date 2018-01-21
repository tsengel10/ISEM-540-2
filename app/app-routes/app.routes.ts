import * as angular from "angular";
import "angular-route";

export function initRoutes(app: angular.IModule) {
    /* @ngInject */
    app.config(function($routeProvider: angular.route.IRouteProvider) {
        $routeProvider
            .when("/", { template: "<homepage></homepage>"})
            .when("/edocs", { template: "<edocs></edocs>"})
            .when("/eadmission", { template: "<eadmission></eadmission>"})
            .otherwise({ redirectTo: "/" });
    });
}