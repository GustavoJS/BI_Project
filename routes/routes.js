let express = require('express');
let app = express();
let router = express.Router();

let HomeController = require("../controllers/HomeController");

router.get("/", HomeController.index);
router.get("/ocorrencia", HomeController.findOne);
router.get("/tabelascad", HomeController.findTablesCad);
router.get("/tabelasreporting", HomeController.findTablesReporting);
router.get("/tabelasrel", HomeController.getTablesRelated);

module.exports = router;