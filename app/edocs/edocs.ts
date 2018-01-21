import * as angular from "angular";
import {EdocsController} from "./edocs.controller";
const templateUrl = require("./edocs.html");

export const edocs: angular.IComponentOptions = {
    templateUrl: templateUrl,
    controller: EdocsController,
    controllerAs: "vm",
    bindings: {}
};