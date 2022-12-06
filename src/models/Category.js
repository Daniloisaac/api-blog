'use strict';

module.exports = (sequelize, DataTypes) => {

 const Category = sequelize.define('Category', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    name: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: false,
    underscored: true,
    tableName: 'categories'
  });
  return Category;
};