import * as angular from "angular";
import {EadmissionController} from "./eadmission.controller";
const templateUrl = require("./eadmission.html");

export const eadmission: angular.IComponentOptions = {
    templateUrl: templateUrl,
    controller: EadmissionController,
    controllerAs: "vm",
    bindings: {}
};