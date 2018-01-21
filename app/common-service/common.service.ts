import * as angular from "angular";
import {ApiUrl} from "../models/app-config.model";
import {User} from "../models/user.model";

export class CommonService {
    
    private currentUserPath = `${this.API_URL.currentUser}`;

    /* @ngInject */
    constructor(private API_URL: ApiUrl,
                private $http: angular.IHttpService) {}

    getCurrentUser(): angular.IPromise<User> {
        return this.$http.get(this.currentUserPath).then((res: {data: User}) => res.data);
    }
}