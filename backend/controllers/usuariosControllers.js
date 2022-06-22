const Usuarios = require("../models/usuarios")


const usuariosController = {


    //agregar usuario
    Agregarusuario: async (req, resp) => {

        const nuevoUsuario = Usuarios({
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono,
            idusuario: req.body.idusuario
        })
        nuevoUsuario.save(function (err) {
            if (!err) {
                resp.send("usuario agregado")
            } else {
                resp.send(err)
            }
        })
    },
    //obtener todos los datos
    ObtenerDatos: async (req, resp) => {
        let usuarios

        let error = null

        try {
            usuarios = await Usuarios.find()

        } catch (err) {
            error = err
            console.log(error)
        }

        resp.json({
            response: error ? "ERROR" : { usuarios },
            success: error ? false : true,
            error: error
        })
    },

    //obtener un usuario
    ObtenerDataUsuario: async (req, resp) => {
        Usuarios.find({ idusuario: req.body.idusuario }, function (docs, err) {
            if (!err) {
                resp.send(docs)
            } else {
                resp.send(err)
            }

        })
    },

    //actualiza
    Actualizausuario: async (req, resp) => {
        Usuarios.findOneAndUpdate({ idusuario: req.body.idusuario }, {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono,
        }, function (err) {
            if (!err) {
                resp.send("usuario actualizado")
            } else {
                resp.send(err)
            }
        })

    },

    //borrar usuario
    Borrarusuario: async (req, resp) => {
        Usuarios.findOneAndDelete({ idusuario: req.body.idusuario },(err)=> {
            if (!err) {
                resp.send("usuario eliminado")
            } else {
                resp.send(err)
            }
        })

    },

}
module.exports = usuariosController