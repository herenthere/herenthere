/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RoadTripStatistics', {
    RoadtripStatsID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RoadtripID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DateCreated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ActualLength: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Stops: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NumberOfClicks: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'RoadTripStatistics'
  });
};
