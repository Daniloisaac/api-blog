'use strict';
module.exports = (sequelize, DataTypes) => {
 const users = sequelize.define('User', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    underscored: true,
    tableName: 'users'
  });

  users.associate = (models) => {
    users.hasMany(models.blog_post, {
      as: 'blog_posts',
      foreignKey: 'user_id',
    })
  }
  return users;
};