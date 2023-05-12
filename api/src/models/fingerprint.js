module.exports = function(sequelize, DataTypes) {
    const Fingerprint = sequelize.define('Fingerprint', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      client_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      fingerprint: {
        allowNull: false,
        type: DataTypes.STRING(255)
      }
    }, {
      sequelize,
      tableName: 'fingerprints',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
  
    Fingerprint.associate = function(models) {
      // Define las asociaciones con otros modelos aquí, si es necesario
    };
  
    return Fingerprint;
};