module.exports = (sequelize, DataTypes) => {
  const Merchant = sequelize.define(
    "Merchant",
    {
      merchantId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "merchantId",
      },
      MERCHANT_PIN: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "MERCHANT_PIN",
      },
      MAX_AMT: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "MAX_AMT",
      },
      App_enable: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "App_enable",
      },
      Ali_enable: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "Ali_enable",
      },
      Wec_enable: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "Wec_enable",
      },
      Rail_enable: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "Rail_enable",
      },
      Rs232_enable: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "Rs232_enable",
      },
      FixRate: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "FixRate",
      },
      rateMC: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "rateMC",
      },
      rateVI: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "rateVI",
      },
      rateVILocal: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "rateVILocal",
      },
      rateMCLocal: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "rateMCLocal",
      },
      rateJCB: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "rateJCB",
      },
      rateUPI: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "rateUPI",
      },
      rateTPN: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "rateTPN",
      },
      KTBNORMAL: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "KTBNORMAL",
      },
      MerchantSupportRate: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "MerchantSupportRate",
      },
      AXA: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "AXA",
      },
      serial: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "serial",
      },
    },
    {
      tableName: "Merchant",
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Merchant;
};
