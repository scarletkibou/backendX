module.exports = (sequelize, DataTypes) => {
  const Bank = sequelize.define(
    "Bank",
    {
      code: {
        type: DataTypes.STRING(3),
        allowNull: false,
        primaryKey: true,
      },
      name_th: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      name_en: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      swift_code: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      short_name: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      cdt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      udt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "bank",
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Bank;
};
