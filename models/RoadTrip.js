/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RoadTrip', {
    RoadTripID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    RoadTripName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Distance: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    StartLocation: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    Destination: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StopDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Duration: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'RoadTrip'
  });
};
