'use strict';

module.exports = (sequelize, DataTypes) => {
 const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {

    tableName: 'posts_categories',
    timestamps: false,
    underscored: true,
  });

  PostCategory.associate = (models) => {
   models.Category.belongsToMany(models.BlogPost, {
    as: 'BlogPostAndCategory',
    through: PostCategory,
    foreignKey: 'postId',
    otherKey: 'categoryId'
   });
   models.BlogPost.belongsToMany(models.Category, {
    as: 'categories',
    through: PostCategory,
    foreignKey: 'postId',
    otherKey: 'categoryId'
   })
  }
  return PostCategory;
};