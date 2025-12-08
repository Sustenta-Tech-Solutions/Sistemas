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

function adquirirDados(siloId, fkEmpresa) {
  var instrucaoSql = `
    SELECT 
        -- Agrupa para o minuto exato (ex: 10:01:00)
        DATE_FORMAT(r.dtHora, '%Y-%m-%d %H:%i:00') AS dtHoraMinuto,
        s.posicao,
        -- Calcula a média (AVG) de temperatura e umidade dentro daquele minuto
        AVG(r.temperatura) AS temperaturaMedia,
        AVG(r.umidade) AS umidadeMedia
    FROM 
        registro r
    JOIN sensor s ON r.fkSensor = s.idSensor
    WHERE 
        s.fkSilo = ${siloId} AND s.fkEmpresa = ${fkEmpresa}
    GROUP BY 
        dtHoraMinuto,
        s.posicao
    ORDER BY 
        dtHoraMinuto DESC
    LIMIT 21; -- Pega os últimos 7 minutos para cada posição (3 posições * 7 minutos)
`;

console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}

module.exports = {
  buscarUltimasMedidas,
  buscarMedidasEmTempoReal,
  adquirirDados
};
