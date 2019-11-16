'use strict';
module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    Name: DataTypes.STRING,
    password: DataTypes.STRING,
    IsDeleted: DataTypes.INTEGER
  }, {});
  admin.associate = function(models) {
    // associations can be defined here
  };
  return admin;
};