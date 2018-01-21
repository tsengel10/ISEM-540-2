import * as angular from "angular";
import {HomePageController} from "./homepage.controller";
const templateUrl = require("./homepage.html");

export const homepage: angular.IComponentOptions = {
    templateUrl: templateUrl,
    controller: HomePageController,
    controllerAs: "vm",
    bindings: {}
};