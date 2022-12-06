'use strict';

module.exports = (sequelize, DataTypes) => {
 const PostCategory = sequelize.define('PostCategory', {
    post_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true,
  });

  PostCategory.associate = (models) => {
   models.Category.belongsToMany(models.blogPost, {
    as: 'blogPosts',
    through: PostCategory,
    foreignKey: 'category_id',
    otherKey: 'post_id'
   });
   models.blogPost.belongsToMany(models.Category, {
    as: 'categories',
    through: PostCategory,
    foreignKey: 'post_id',
    otherKey: 'category_id  '
   })
  }
  return PostCategory;
};