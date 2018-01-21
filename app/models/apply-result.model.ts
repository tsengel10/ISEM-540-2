import { User } from "./user.model";
import { University } from "./university.model";

export interface ApplyResult {
    id: string;
    user: User;
    totalUniversitiesApplied: number;
    acceptedUniversities?: University[];
}