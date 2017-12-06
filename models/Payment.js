/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Payment', {
    PaymentID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PaymentType: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Price: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IsPaid: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'Payment'
  });
};
