const firstdb = require("../database/firstdatabase");
const seconddb = require("../database/seconddatabase");

class Ocorrencias{

    async findReports(){
		let result = undefined;
		await seconddb.select("*").table("REPORTING.FTO_EVENT").where({sk_event: 6989}).then(data => {
 			result = data;

		}).catch(error => {
			console.log(error);
			
			// return error;
			result = error;
		});

		// console.log("Teste fora do escopo da consulta SQL");

		return result;
	
	}

	async findCadTables(){
		let result = undefined;
		
		await firstdb.raw("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE='BASE TABLE'").then(data => {
			result = data;
		
		}).catch(error => {
			console.log(error);
			result = error;
		});

		return result;
	}

	async findReportingTables(){
		let result = undefined;
		await seconddb.raw("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE= 'BASE TABLE'").then(data => {
			result = data;
		}).catch(error => {
			console.log(error);
			result  = error;
		});

		return result;
	}

	async getTablesJoin(){

		let result = undefined;
		await seconddb.raw("SELECT top 10 * FROM REPORTING.DIM_EVENT de INNER JOIN REPORTING.FTO_EVENT fe ON de.SK_EVENT = fe.SK_EVENT").then(data => {
			result = data;
		}).catch(error => {
			console.log(error);
			result = error;
		})

		return result;
	}
}

module.exports = new Ocorrencias();