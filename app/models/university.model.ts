export interface University {
    id: string;
    name: string;
    institutionCode: string;
    capacity: number;
    totalStudents: number;
    active: boolean;
    minToeflScore: number;
    minSatScore: number;
    address: {
        city: string;
        state: string;
        zipCode: string;
    }
}