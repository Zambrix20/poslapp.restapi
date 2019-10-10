'use strict';
module.exports = (sequelize, DataTypes) => {
  const Equipos = sequelize.define('Equipos', {
    id_equipo: DataTypes.INTEGER,
    descripcionEquipo: DataTypes.STRING,
    nombreEquipo: DataTypes.STRING,
    imagenEquipo: DataTypes.STRING,
    fechaMantenimiento: DataTypes.DATE
  }, {});
  Equipos.associate = function(models) {
    // associations can be defined here
  };
  return Equipos;
};