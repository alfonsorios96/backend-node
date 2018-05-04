'use strict';

const faker = require('faker');

/*
* @description: Gets public tsec
* */
exports.myFunction = (request, response) => {
    const res = {};
    response.write(JSON.stringify(res));
    response.end();
};
