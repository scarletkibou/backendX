module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define(
    "Store",
    {
      serial: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      merchantNameLine1: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      merchantNameLine2: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      merchantNameLine3: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      fee: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      qrAid: {
        type: DataTypes.STRING(16),
        allowNull: true,
      },
      qrRef2: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      qrBillerId: {
        type: DataTypes.STRING(16),
        allowNull: true,
      },
      qrMerchantName: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      qrMerchantNameTHAI: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      qrTerminalId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      qrMerchantId: {
        type: DataTypes.STRING(16),
        allowNull: true,
      },
      qrBillerkey: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      primaryIp: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      primaryPort: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      secondaryIp: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      secondaryPort: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      qrPort: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      qrBscanCIP: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      qrBscanCPort: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      posTerminalId: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      posMerchantId: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      posTpdu: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      posNii: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      epsTerminalId: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      epsMerchantId: {
        type: DataTypes.STRING(16),
        allowNull: true,
      },
      epsTpdu: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      epsNii: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      tmsTerminalId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tmsMerchantId: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      tmsTpdu: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      tmsNii: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      tmsTerminaversion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      tmsMsgVersion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      paramVersion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      posId: {
        type: DataTypes.STRING(16),
        allowNull: true,
      },
      taxId: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      aliTerid: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      aliMerid: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      aliStoreid: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ghcTerminalId: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ghcMerchantId: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ghcTpdu: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ghcNii: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ghcTerminaversion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ghcMsgVersion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      para_enable: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      qr_para_enable: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      para_com: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      para_ref1: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      para_ref2: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      para_ref3: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      qr_para_ref1: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      qr_para_ref2: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      MERCHANT_PIN: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      MAX_AMT: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      App_enable: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      Ali_enable: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Wec_enable: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Rail_enable: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Rs232_enable: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      FixRate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rateMC: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rateVI: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rateVILocal: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rateMCLocal: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rateJCB: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rateUPI: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rateTPN: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      KTBNORMAL: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      MerchantSupportRate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      AXA: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      Ref1text: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Ref2text: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Ref3text: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      QrRef1text: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      QrRef2text: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "store",
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Store;
};
