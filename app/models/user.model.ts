import {Document} from "./document.model"
import { University } from "./university.model";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    role: string;
    email: string;
    documents?: Document[];
    toeflScore?: number,
    satScore?: number;
    universities?: University[];
}