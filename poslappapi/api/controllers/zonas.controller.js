'use strict';

var _ = require('lodash');
const { Zonas } = require('../models'); // Sequelize

var controllerHelper = require('../helpers/controller.helper');
var messageHelper = require('../helpers/message.helper');
//var ZonasService = require('../services/Zonas.service');

////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

// Module Name
const MODULE_NAME = '[Zonas Controller]';

// Error Messages
const GS_CT_ERR_Zonas_NOT_FOUND = 'Zonas not found';

// Success Messages
const GS_CT_DELETED_SUCCESSFULLY = 'Zonas deleted successfully';

////////////////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
////////////////////////////////////////////////////////////////////////////////

function getZonas(req, res) {

    try {
        console.log("Zonas...");
        console.log(Zonas);
        Zonas.findAll({
        /*include: [{
        model: orderstatus
        }]
        include: [{ all: true, nested: true }]*/
        })
        .then((consoles) => {
        console.log(consoles);
        res.status(200).send(consoles);
        //utils.writeJson(res, consoles);
        }, (error) => {
        res.status(500).send(error);
        });
        } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, getZonas.name, error, res);
        }
}

function getZonasByPk(req, res) {

    try {
        console.log(req.swagger.params.id.value);
        var id = req.swagger.params.id.value;
        console.log("zonas by id..." + id);
        //console.log(gamesystems);
        Zonas.findByPk(id)
        .then(mygamesystem => {
        console.log(mygamesystem);
        res.status(200).send(mygamesystem);})
    } catch (error) {
        console.log("Was an error");
        controllerHelper.handleErrorResponse(MODULE_NAME, getZonasByPk.name, error,
        res);
    }
}

function createZonas(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    try {
        console.log("params : ");
        var mygamesystem = req.body;
        console.log("Zonas ... " + mygamesystem);
        return Zonas
        .create({
            id_zona: mygamesystem.id_zona,
            nombreZona: mygamesystem.nombreZona,
            descripcionZona: mygamesystem.descripcionZona
    }, {
        /* include: [{
            model: order_detail,
            as: 'orderdetail'
        }] */
    })
    .then((mygamesystem) => {
    res.status(201).send(mygamesystem);
})
    .catch((error) => res.status(400).send(error));
} catch (error) {
    console.log("Was an error");
    controllerHelper.handleErrorResponse(MODULE_NAME, createZonas.name, error, res);
}  
}

function updateZonas(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  //console.log("operadores.controller getOperadorById");
  try {
    var id = req.swagger.params.id.value;
    console.log("params : " + id);
    var myupdategamesystem = req.body;
    console.log("update gamesystems ... " + myupdategamesystem.id_zona + " " +
    myupdategamesystem.nombreZona + " " + myupdategamesystem.descripcionZona);
    Zonas.findByPk(id)
    .then(mygamesystem => {
      console.log("Result of findById: " + mygamesystem);
      if (!mygamesystem) {
        res.status(401).send(({}));
      }
    return mygamesystem
    .update({
      id_zona: myupdategamesystem.id_zona,
      nombreZona: myupdategamesystem.nombreZona,
      descripcionZona: myupdategamesystem.descripcionZona
    })
    .then(() => res.status(200).send(mygamesystem) )
      .catch(error => res.status(403).send(mygamesystem));
    })
    .catch(error => {
      console.log("There was an error: " + error);
      //resolve(error);
    });
} catch (error) {
  console.log("Was an error");
  controllerHelper.handleErrorResponse(MODULE_NAME, updateZonas.name, error, res);
}
}

function deleteZonas(req, res) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  console.log(req.swagger.params.id.value);
  var id = req.swagger.params.id.value;
  Zonas.findByPk(id)
  .then(mygamesystem => {
    console.log("Result of findById: " + mygamesystem);
    if (!mygamesystem) {
      res.status(200).send({"success": 0, "description":"not found !"});
    }
    else{
      return mygamesystem
      .destroy()
      .then(() => res.status(200).send({"success": 1, "description":"deleted!"}))
      .catch(error => res.status(403).send({"success": 0, "description":"error !"}))
    }
})
.catch(error => {
  console.log("There was an error: " + error);
});
}

module.exports = {
  getZonas,
  getZonasByPk,
  createZonas,
  updateZonas,
  deleteZonas,
  GS_CT_ERR_Zonas_NOT_FOUND,
  GS_CT_DELETED_SUCCESSFULLY,
  MODULE_NAME
}