module.exports = function(sequelize, DataTypes) {
  const Beer = sequelize.define("Beer", {
    name: {
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
  


Beer.associate = function(models) {

  Beer.belongsTo(models.Brewery, {
    foreignKey: {
      name: "brewery_id",
      allowNull: true
    }
  });

  Beer.belongsTo(models.Profile, {
    foreignKey: {
      name: "profile_id",
      allowNull: true
    }
  });

  Beer.belongsTo(models.Type, {
    foreignKey: {
      name: "type_id",
      allowNull: true
    }
  });

  Beer.belongsTo(models.Style, {
    foreignKey: {
      name: "style_id",
      allowNull: true
    }
  });

};
return Beer;
};