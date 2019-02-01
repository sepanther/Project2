module.exports = function(sequelize, DataTypes) {
  var beer = sequelize.define("beer", {
    beer_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ABV: {
      type: DataTypes.FLOAT(3,1),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brewery: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profile: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_link: {
      type: DataTypes.TEXT
    }
  });
  return beer;
};

beer.associate = function(models) {

  beer.belongsTo(models.country, {
    as: "country",
    foreignKey: {
      name: "id",
      allowNull: true
    }
  });

  beer.belongsTo(models.type, {
    as: "type",
    foreignKey: {
      name: "id",
      allowNull: true
    }
  });

  beer.belongsTo(models.brewery, {
    as: "brewery",
    foreignKey: {
      name: "id",
      allowNull: true
    }
  });

  beer.belongsTo(models.profile, {
    as: "profile",
    foreignKey: {
      name: "id",
      allowNull: true
    }
  });
};