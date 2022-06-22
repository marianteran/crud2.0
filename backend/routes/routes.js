
const Router = require("express").Router();

const usuariosController = require("../controllers/usuariosControllers");

const { ObtenerDatos, Agregarusuario, ObtenerDataUsuario,Actualizausuario,Borrarusuario } =usuariosController

Router.route("/obtenerusuarios")
.get(ObtenerDatos)

Router.route("/agregarusuarios")
.post(Agregarusuario)

Router.route("/obtenerdatausuario")
.post(ObtenerDataUsuario)

Router.route("/actualizausuario")
.post(Actualizausuario)

Router.route("/borrarusuario")
.post(Borrarusuario)

module.exports= Router