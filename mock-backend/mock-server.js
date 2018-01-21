'use strict';

let jsonServer = require('json-server');
let bodyParser = require('body-parser');

module.exports = function startMockServer() {
    console.log("Starting JSON Server");

    let server = jsonServer.create();
    server.use(jsonServer.defaults());
    let db = require("./db.js");
    let router = jsonServer.router(db());

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.get("/currentUser", (req, res) => {
        res.jsonp(router.db.object.currentUser);
    });

    server.get("/allEdocsUsers", (req, res) => {
        res.jsonp(router.db.object.allEdocsUsers);
    });

    server.get("/allEdocsDocuments", (req, res) => {
        res.jsonp(router.db.object.allEdocsDocuments);
    });

    server.get("/allEadmissionUsers", (req, res) => {
        res.jsonp(router.db.object.allEadmissionUsers);
    });

    server.get("/allEadmissionUniversities", (req, res) => {
        res.jsonp(router.db.object.allEadmissionUniversities);
    });

    server.get("/allApplyResult", (req, res) => {
        res.jsonp(router.db.object.allApplyResult);
    });


    server.use(router);
    server.listen(3005);
};