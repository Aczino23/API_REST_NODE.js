const express = require('express'); // se requiere express
const v1WorkoutRoutes = require('./v1/routes/workoutRoutes'); // se requiere la ruta de los ejercicios

const app = express(); // se crea una instancia de express
const PORT = process.env.PORT || 3000; // se define el puerto de la aplicacion

app.use(express.json()); // se define el formato de los datos que se reciben
app.use('/api/v1/workouts', v1WorkoutRoutes); // se agrega la ruta de los ejercicios

app.listen(PORT, () => { // se inicia el servidor
    console.log(`Server is running on port ${PORT}`); // se muestra un mensaje en consola
}); 