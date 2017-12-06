/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Feedback', {
    FeedbackID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    RoadtripID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Rating: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Comment: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'Feedback'
  });
};
