var _ = require("lodash");

String.prototype.capitalize = function () {
    return `${this[0].toUpperCase()}${this.slice(1)}`;
};

module.exports = () => {
    "use strict";

    let faker = require("faker");
    let data = {};

    let currentUser = {
        id: faker.random.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        role: "admin",
        email: faker.internet.email(),
    };

    data.currentUser = currentUser;

    let allEdocsUsers = _.times(10, () => {
        return {
            id: faker.random.uuid(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            role: "user",
            documents: _.times(faker.random.number(5), () => {
                return {
                    id: faker.random.uuid(),
                    name: faker.random.uuid(),
                    receiveDate: faker.date.recent(),
                    fileFormat: faker.random.arrayElement(["rar", "pdf", "jpg", "json", "xml"])
                }
            }),
            active: faker.random.boolean()
        }
    });

    data.allEdocsUsers = allEdocsUsers;

    let allEdocsDocuments = _.times(20, () => {
        return {
            id: faker.random.uuid(),
            name: faker.random.uuid(),
            receiveDate: faker.date.recent(),
            fileFormat: faker.random.arrayElement(["rar", "pdf", "jpg", "json", "xml"])
        }
    });

    data.allEdocsDocuments = allEdocsDocuments;

    let allEadmissionUsers = _.times(10, () => {
        return {
            id: faker.random.uuid(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            role: "user",
            universities: _.times(faker.random.number({min:3, max:5}), () => {
                return {
                    id: faker.random.uuid(),
                    name: faker.company.companyName(),
                    institutionCode: faker.random.uuid().substring(0, 8),
                    capacity: faker.random.number({ min:5000, max: 15000 }),
                    totalStudents: faker.random.number({ min:1000, max: 10000 }),
                    active: faker.random.boolean(),
                    minToeflScore: faker.random.number({ min:50, max: 80 }),
                    minSatScore: faker.random.number({ min:500, max: 700 }),
                    address: {
                        city: faker.address.city(),
                        state: faker.address.state(),
                        zipCode: faker.address.zipCode()
                    }
                }
            }),
            active: faker.random.boolean(),
            toeflScore: faker.random.number(100),
            satScore: faker.random.number(1000)
        }
    });

    data.allEadmissionUsers = allEadmissionUsers;

    let allEadmissionUniversities = _.times(30, () => {
        return {
            id: faker.random.uuid(),
            name: faker.company.companyName(),
            institutionCode: faker.random.uuid().substring(0, 8),
            capacity: faker.random.number({ min:5000, max: 15000 }),
            totalStudents: faker.random.number({ min:1000, max: 10000 }),
            active: faker.random.boolean(),
            minToeflScore: faker.random.number({ min:50, max: 80 }),
            minSatScore: faker.random.number({ min:500, max: 700 }),
            address: {
                city: faker.address.city(),
                state: faker.address.state(),
                zipCode: faker.address.zipCode()
            }
        }
    });

    data.allEadmissionUniversities = allEadmissionUniversities;

    let allApplyResult = _.times(20, () => {
        return {
            id: faker.random.uuid(),
            user: {
                id: faker.random.uuid(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                role: "user",
                active: faker.random.boolean(),
                toeflScore: faker.random.number(100),
                satScore: faker.random.number(1000)
            },
            totalUniversitiesApplied: faker.random.number({ min:3, max: 10 }),
            acceptedUniversities: _.times(faker.random.number({min:3, max:5}),() => {
                return {
                    id: faker.random.uuid(),
                    name: faker.company.companyName(),
                    institutionCode: faker.random.uuid().substring(0, 8),
                    capacity: faker.random.number({ min:5000, max: 15000 }),
                    totalStudents: faker.random.number({ min:1000, max: 10000 }),
                    active: faker.random.boolean(),
                    minToeflScore: faker.random.number({ min:50, max: 80 }),
                    minSatScore: faker.random.number({ min:500, max: 700 }),
                    address: {
                        city: faker.address.city(),
                        state: faker.address.state(),
                        zipCode: faker.address.zipCode()
                    }
                }
            })
        }
    });

    data.allApplyResult = allApplyResult;

    return data;
};