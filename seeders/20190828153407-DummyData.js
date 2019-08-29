'use strict';

const csvFilePath = './user_table.csv';
const csv = require('csvtojson');


module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = await csv().fromFile(csvFilePath);
    data = data.map(user => {
      let date = new Date();
      return {
        ...user,
        createdAt: date,
        updatedAt: date
      }
    })
    return queryInterface.bulkInsert('Users', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
