/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('admin', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    IsDeleted: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
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
    tableName: 'admin'
  });

  Model.associate = function() {

  }

  return Model;
};
