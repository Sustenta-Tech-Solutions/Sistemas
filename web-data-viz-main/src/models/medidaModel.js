var database = require("../database/config");

function buscarUltimasMedidas(idEmpresa, qtdSilos) {
  var instrucaoSql = `SELECT * FROM vw_mediaMedicoes WHERE Empresa = ${idEmpresa} LIMIT ${qtdSilos}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {
  var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function adquirirDados(siloId) {
  var instrucaoSql = `SELECT *
FROM (
    SELECT
        r.idRegistro,
        r.fkSensor,
        r.temperatura,
        r.umidade,
        r.dtHora,
        s.posicao,
        ROW_NUMBER() OVER (PARTITION BY r.fkSensor ORDER BY r.dtHora DESC) AS rn
    FROM registro r
    JOIN sensor s ON r.fkSensor = s.idSensor
    WHERE s.fkSilo = ${siloId}
) AS registros_com_num
WHERE rn <= 7
ORDER BY posicao, dtHora Desc;`;

console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}

module.exports = {
  buscarUltimasMedidas,
  buscarMedidasEmTempoReal,
  adquirirDados
};
