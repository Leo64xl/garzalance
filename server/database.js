import mongoose from "mongoose";
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..','.env') });

(async () => {
    try {
        await mongoose.connect(
            process.env.MONGODBCON,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log('Connected to:', mongoose.connection.name); // Aquí corregí el acceso al nombre de la conexión
    } catch (error) {
        console.error('Connection error:', error);
    }
})();




