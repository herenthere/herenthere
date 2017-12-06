/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Contact', {
    ContactID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    FirstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ContactName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ContactEmail: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ContactNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    AdditionalInfo: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'Contact'
  });
};
