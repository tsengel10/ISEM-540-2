import * as angular from "angular";
import {homepage} from "./homepage/homepage";
import {edocs} from "./edocs/edocs";
import {eadmission} from "./eadmission/eadmission";

export function initComponents(app: angular.IModule) {
    app.component("homepage", homepage);
    app.component("edocs", edocs);
    app.component("eadmission", eadmission);

}