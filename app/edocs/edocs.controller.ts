import * as angular from "angular";
import {CommonService} from "../common-service/common.service";
import {EdocsService} from "../common-service/edocs.service";
import {User} from "../models/user.model";
import {Document} from "../models/document.model";

type Tab = "allUsers" | "allDocuments";

export class EdocsController {

    currentUser: User;
    allUsers: User[];
    allDocuments: Document[];
    selectedTab: Tab = "allUsers";
    selectedUser: User;
    selectedUserDocuments: Document[];
    isShowUserDocuments: boolean = false;

    /* @ngInject */
    constructor(private commonService: CommonService,
                private edocsService: EdocsService) {

    }

    $onInit() {
        this.isShowUserDocuments = false;
        this.commonService.getCurrentUser().then((res) => this.currentUser = res);
        this.edocsService.getAllUsers().then((res) => this.allUsers = res);
        this.edocsService.getAllDocuments().then((res) => this.allDocuments = res);
    }

    isCurrentTab(tab: Tab): boolean {return this.selectedTab === tab; }
    
    setCurrentTab(tab: Tab): void { 
        this.selectedTab = tab; 
        this.isShowUserDocuments = false;
    }

    showList(): void {
        this.isShowUserDocuments = false;
    }

    hasDocumentsToShow(user: User): boolean { return user.documents.length > 0; }

    documentDetails(user: User): void {
        this.selectedUser = user;
        this.selectedUserDocuments = user.documents;
        this.isShowUserDocuments = true;
    }
};