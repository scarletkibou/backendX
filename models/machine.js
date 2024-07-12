module.exports = (sequelize, DataTypes) => {
  const Machine = sequelize.define(
    "Machine",
    {
      MachineID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "MachineID",
      },
      MachineName: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      Type: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      Manufacturer: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      ModelNumber: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      serial: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      PurchaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      InstallationDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      LastMaintenanceDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      MaintenanceSchedule: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      Location: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      Status: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      other: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "customer",
          key: "customer_id",
        },
      },
    },
    {
      tableName: "machine",
      timestamps: false,
    }
  );

  return Machine;
};
