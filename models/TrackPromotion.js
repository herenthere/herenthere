/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TrackPromotion', {
    StopID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    PromotionDetailID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    Priority: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'TrackPromotion'
  });
};
