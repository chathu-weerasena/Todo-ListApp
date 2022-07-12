"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "update files",
          deadline: "22/07/2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "confirm files",
          deadline: "30/07/2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "send files",
          deadline: "22/08/2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
