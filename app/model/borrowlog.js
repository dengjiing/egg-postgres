/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('borrowlog', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bookId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    adminId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UpdatedDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'borrowlog'
  });

  Model.associate = function() {

  }

  return Model;
};
