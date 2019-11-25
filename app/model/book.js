/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('book', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    make_source: {
      type: DataTypes.STRING,
      allowNull: false
    },
    book_categoryid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inventory: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_sold_out: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_date: {
      type: DataTypes.TIME,
      allowNull: true
    },
    updated_date: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'book'
  });

  Model.associate = function() {

  }

  return Model;
};
