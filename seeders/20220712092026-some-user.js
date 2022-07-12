"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Yara",
          email: "yil@gmail.com",
          phone: 657892541,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kevin",
          email: "manny@gmail.com",
          phone: 651562044,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lize",
          email: "ltjenz@gmail.com",
          phone: 655622911,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
