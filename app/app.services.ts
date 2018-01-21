import * as angular from "angular";
import {CommonService} from "../app/common-service/common.service";
import {EdocsService} from "../app/common-service/edocs.service";
import {EadmissionService} from "../app/common-service/eadmission.service";

export function initServices(app: angular.IModule) {
    app.service("commonService", CommonService);
    app.service("edocsService", EdocsService);
    app.service("eadmissionService", EadmissionService);
}