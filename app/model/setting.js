/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('setting', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    BorrowTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ReturnTime: {
      type: DataTypes.DATE,
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
    tableName: 'setting'
  });

  Model.associate = function() {

  }

  return Model;
};
