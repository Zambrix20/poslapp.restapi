'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estatus = sequelize.define('Estatus', {
    id_estatus: DataTypes.INTEGER,
    descripcionEstatus: DataTypes.STRING
  }, {});
  Estatus.associate = function(models) {
    // associations can be defined here
  };
  return Estatus;
};