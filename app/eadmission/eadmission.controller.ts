import * as angular from "angular";
import {CommonService} from "../common-service/common.service";
import {EadmissionService} from "../common-service/eadmission.service";
import {User} from "../models/user.model";
import {Document} from "../models/document.model";
import { University } from "../models/university.model";
import { ApplyResult } from "../models/apply-result.model";

type Tab = "allUsers" | "allUniversities" | "applyResult";

export class EadmissionController {

    currentUser: User;
    allEadmissionUsers: User[];
    allUniversities: University[];
    allApplyResult: ApplyResult[];
    selectedTab: Tab = "allUsers";
    selectedUser: User;
    selectedUserUniversities: University[];
    selectedApplyResult: ApplyResult;
    isShowEadmissionDetails: boolean = false;
    isUserDetail: boolean = false;
    isApplyResultDetail: boolean = false;

    /* @ngInject */
    constructor(private commonService: CommonService,
                private eadmissionService: EadmissionService) {

    }

    $onInit() {
        this.isShowEadmissionDetails = false;
        this.commonService.getCurrentUser().then((res) => this.currentUser = res);
        this.eadmissionService.getAllEadmissionUsers().then((res) => this.allEadmissionUsers = res);
        this.eadmissionService.getAllEadmissionUniversities().then((res) => this.allUniversities = res);
        this.eadmissionService.getAllApplyResult().then((res) => this.allApplyResult = res);
    }

    isCurrentTab(tab: Tab): boolean {return this.selectedTab === tab; }
    
    setCurrentTab(tab: Tab): void { 
        this.selectedTab = tab; 
        this.isShowEadmissionDetails = false;
    }

    showList(): void {
        this.isShowEadmissionDetails = false;
    }

    showUserDetails(user: User): void {
        this.selectedUser = user;
        this.selectedUserUniversities = user.universities;
        this.isShowEadmissionDetails = true;
        this.isUserDetail = true;
        this.isApplyResultDetail = false;
    }

    showApplyResult(result: ApplyResult): void {
        this.isUserDetail = false;
        this.selectedApplyResult = result;
        this.isApplyResultDetail = true;
        this.isShowEadmissionDetails = true;
    }
};