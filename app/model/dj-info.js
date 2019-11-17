/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('dj-info', {
    height: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: '180'
    },
    weight: {
      type: DataTypes.REAL,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'dj-info'
  });

  Model.associate = function() {

  }

  return Model;
};
