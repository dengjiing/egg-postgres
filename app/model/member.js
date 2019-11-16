/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('member', {
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
    Age: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Sex: {
      type: DataTypes.STRING(8),
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
    tableName: 'member'
  });

  Model.associate = function() {

  }

  return Model;
};
