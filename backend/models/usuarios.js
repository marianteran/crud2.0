const mongoose =require("mongoose")


const usuariosSchema= new mongoose.Schema ({
    nombre:String,
    email:String,
    telefono:String,
    idusuario:String
})

const Usuarios = mongoose.model("usuarios", usuariosSchema)

module.exports =Usuarios;