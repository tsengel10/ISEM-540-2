import * as angular from "angular";
import {ApiUrl} from "../models/app-config.model";
import {User} from "../models/user.model";
import {Document} from "../models/document.model";

export class EdocsService {

    private allUsersPath = `${this.API_URL.allEdocsUsers}`;
    private allDocumentsPath = `${this.API_URL.allEdocsDocuments}`;

    /* @ngInject */
    constructor(private API_URL: ApiUrl,
        private $http: angular.IHttpService) {}

    getAllUsers(): angular.IPromise<User[]> {
        return this.$http.get(this.allUsersPath).then((res: {data: User[]}) => res.data);
    }

    getAllDocuments(): angular.IPromise<Document[]> {
        return this.$http.get(this.allDocumentsPath).then((res: {data: Document[]}) => res.data);
    }
}