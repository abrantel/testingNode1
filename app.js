/*const http = require('http');
const server = http.createServer((req, res)=> {
    res.end('Servidor funcionando')
})

const port = 3000;

server.listen(port, ()=> {
    console.log('Escuchando solicitudes')
})*/

const express = require('express')
const app = express();
require('dotenv').config()

const port = process.env.PORT || 3001;

const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@sandbox.oalrg.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, )
.then(()=> console.log('base de datos conectada'))
.catch(e => console.log(e))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/public"))

app.use('/', require('./router/RutasWeb'))
app.use('/mascotas', require('./router/Mascotas'))

app.use((req, res, next)=> {
    res.status(404).render('404', {
        titulo: '404',
        descripcion: 'Titulo del sitio web'
    })
})



app.listen(port, ()=> {
    console.log(`funcionando en el puerto ${port}`)
})