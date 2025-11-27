var express = require("express");
var router = express.Router();

var silosController = require("../controllers/silosController");

router.get("/:empresaId", function (req, res) {
  silosController.buscarSilosPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  silosController.cadastrar(req, res);
})

module.exports = router;