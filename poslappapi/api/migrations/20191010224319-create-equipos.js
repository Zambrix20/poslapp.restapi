'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Equipos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_equipo: {
        type: Sequelize.INTEGER
      },
      descripcionEquipo: {
        type: Sequelize.STRING
      },
      nombreEquipo: {
        type: Sequelize.STRING
      },
      imagenEquipo: {
        type: Sequelize.STRING
      },
      fechaMantenimiento: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Equipos');
  }
};