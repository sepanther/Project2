module.exports = function(sequelize, DataTypes) {
    var brewery = sequelize.define("brewery", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
          type: DataTypes.STRING,
          allowNull: true
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
    return brewery;
  };

  brewery.associate = function(models) {

    brewery.belongsTo(models.country, {
      as: "country",
      foreignKey: {
        name: "id",
        allowNull: true
      }
    });
}