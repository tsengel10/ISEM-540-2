import * as angular from "angular";
import {ApiUrl} from "../models/app-config.model";
import {User} from "../models/user.model";
import {Document} from "../models/document.model";
import { University } from "../models/university.model";
import { ApplyResult } from "../models/apply-result.model";

export class EadmissionService {

    private allUsersPath = `${this.API_URL.allEadmissionUsers}`;
    private allEadmissionUniversitiesPath = `${this.API_URL.allEadmissionUniversities}`;
    private allApplyResultPath = `${this.API_URL.allApplyResult}`;

    /* @ngInject */
    constructor(private API_URL: ApiUrl,
        private $http: angular.IHttpService) {}

    getAllEadmissionUsers(): angular.IPromise<User[]> {
        return this.$http.get(this.allUsersPath).then((res: {data: User[]}) => res.data);
    }

    getAllEadmissionUniversities(): angular.IPromise<University[]> {
        return this.$http.get(this.allEadmissionUniversitiesPath).then((res: {data: University[]}) => res.data);
    }

    getAllApplyResult(): angular.IPromise<ApplyResult[]> {
        return this.$http.get(this.allApplyResultPath).then((res: {data: ApplyResult[]}) => res.data);
    }
}