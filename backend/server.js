require('dotenv').config()//conex base de datos
const express = require("express") //inicializar servidor
const cors=require("cors")
const Router=require("./routes/routes") //conexion a las rutas 


const app=express()//inicializar servidor
//const bodyParser =require('body-parser')
//app.use(bodyParser.json)
//app.use(bodyParser.urlencoded({extended:'true'}))

require('./config/database') //conex base de datos
app.use(cors())
app.use(express.json());

app.use('/api', Router) //conexion a las rutas 



//importacion del archivo de rutas y modelo
//const rutausuario=require('./routes/routes')

//app.use('/api/usuario', rutausuario)

/* app.get('/', (req, res)=>{
    res.end("bienvenido pto 500")
})
 */



app.listen("4000",()=>console.log("servidor conectado en puerto 4000"))