/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Stop', {
    StopID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CategoryID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    BusinessID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    StopName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Address: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Rating: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'Stop'
  });
};
