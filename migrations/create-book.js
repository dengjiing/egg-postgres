'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('book', {
        Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Author: {
          type: Sequelize.STRING,
          allowNull: false
        },
    Price: {
        type: Sequelize.STRING,
        allowNull: false          
        },
        MakeSource: {
            type: Sequelize.STRING,
            allowNull: false
        },
        BookCategoryId: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Inventory: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
      IsDeleted: {
        type: Sequelize.INTEGER
        },
        IsSoldOut: {
            type: Sequelize.INTEGER
          },
          CreatedDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UpdatedDate: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('admins');
  }
};
  