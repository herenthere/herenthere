/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TripDetail', {
    RoadtripID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    StartPoint: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    EndPoint: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    StopNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Distance: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Duration: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'TripDetail'
  });
};
