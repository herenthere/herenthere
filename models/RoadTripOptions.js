/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RoadTripOptions', {
    RoadTripOptionsID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RoadTripID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IsPublic: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    RoadTripRange: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    FinancialCost: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NumOfDaysOnRoad: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TimesLunch: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TimesDinner: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DriveWithoutStop: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'RoadTripOptions'
  });
};
