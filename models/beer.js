module.exports = function(sequelize, DataTypes) {
  const Beer = sequelize.define("beer", {
    beer_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ABV: {
      type: DataTypes.FLOAT(3,1),
      allowNull: false
    },
    image_link: {
      type: DataTypes.TEXT
    },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      }
  });
  return beer;
};

Beer.associate = function(models) {

  Beer.belongsTo(models.type, {
    as: "type",
    foreignKey: {
      name: "type_id",
      allowNull: true
    }
  });

  Beer.belongsTo(models.brewery, {
    as: "name",
    foreignKey: {
      name: "brewery_id",
      allowNull: true
    }
  });

  Beer.belongsTo(models.profile, {
    as: "profile",
    foreignKey: {
      name: "profile_id",
      allowNull: true
    }
  });

  Beer.belongsTo(models.type, {
    as: "type",
    foreignKey: {
      name: "type_id",
      allowNull: true
    }
  });

  Beer.belongsTo(models.style, {
    as: "style",
    foreignKey: {
      name: "style_id",
      allowNull: true
    }
  });

};