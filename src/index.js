const express = require('express'); // se requiere express

const app = express(); // se crea una instancia de express
const PORT = process.env.PORT || 3000; // se define el puerto de la aplicacion

app.get('/', (req, res) => { 
    res.send('<h1>Hello World</h1>');
});

app.listen(PORT, () => { // se inicia el servidor
    console.log(`Server is running on port ${PORT}`); // se muestra un mensaje en consola
});