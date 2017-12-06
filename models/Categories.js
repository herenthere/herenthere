/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Categories', {
    CategoryID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CategoryName: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'Categories'
  });
};
