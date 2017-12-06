/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PromotionDetail', {
    PromotionDetailID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    BusinessID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ContactID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    PaymentID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    PromotionStartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PromotionEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'PromotionDetail'
  });
};
