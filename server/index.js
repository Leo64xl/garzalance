import express from 'express'
import indexRoutes from './routers/index.routes.js'
import fileUpload from 'express-fileupload'
import imagesRoutes from'./routers/images.routes.js'
import config from './config.js'
import './database.js'
//require("dotenv").config();

const app =express()

app.set('port', process.env.PORT || 4000);

//cargar el archivo para subir al servidor
app.use(fileUpload({
    tempFileDir :'/temp'
}))


//usar direcciones  funciones de las clases image.Routers y index.Routes
app.use(indexRoutes)
app.use(imagesRoutes)
app.listen(app.get('port'));
console.log('server on port: ',app.get('port'))

