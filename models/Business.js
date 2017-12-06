/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Business', {
    BusinessID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CategoryID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NumberHits: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ContactEmail: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'Business'
  });
};
