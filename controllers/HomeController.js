const Ocorrencias = require("../models/Ocorrencias")

class HomeController{

	async index(req, res){
		res.send("<body style='display: flex; justify-content: center;'><div style='text-align: center'><h1>-- SPORTAL --</h1></div></body>")
	}

	async findOne(req, res){

		let dataResult = await Ocorrencias.findReports();

		if(dataResult != undefined){
			res.statusCode = 200;
			res.send(dataResult);
		}else{

			res.status = 400;
			res.json({status:400, message: "Resgistro não encontrado"});
		}
	}

	async findTablesCad(req, res){
		let dataResult =  await Ocorrencias.findCadTables();

		if(dataResult != undefined){
			res.statusCode = 200;
			res.send(dataResult);

		}else{
			res.status = 400;
			res.json({status:500, message:"Registros não encontrado"});
		}
	}

	async findTablesReporting(req, res){
		let dataResult = await Ocorrencias.findReportingTables();

		if(dataResult != undefined){
			res.statusCode = 200;
			res.send(dataResult);
		
		}else{
			res.status = 400;
			res.json({status:400, message: "Resgistro não encontrado"});
		}
	}

	async getTablesRelated(req, res){
		let dataResult = await Ocorrencias.getTablesJoin();
		if(dataResult != undefined){
			res.statusCode = 200;
			res.send(dataResult);

		}else{
			res.status = 400;
			res.json({status: 400, message:"Registro não encontrado"});
		}
	}

}

module.exports = new HomeController();