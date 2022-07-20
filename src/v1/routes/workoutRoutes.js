const express = require('express'); 
const router = express.Router();
const workoutController = require('../../controllers/workoutController');

router // se define la rutas cons su controlador asociado
    .get("/", workoutController.getAllWorkouts)
    .get("/:workoutId", workoutController.getOneWorkout) 
    .post("/", workoutController.createNewWorkout)
    .patch("/:workoutId", workoutController.updateOneWorkout)
    .delete("/:workoutId", workoutController.deleteOneWorkout);
  
module.exports = router; // se exporta la ruta 