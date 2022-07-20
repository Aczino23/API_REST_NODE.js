const express = require('express'); 
const router = express.Router();

router.route("/").get((req, res) => {
    res.send(`<h2>Hola desde ${req.baseUrl}</h2>`);
});

module.exports = router; // se exporta la ruta 