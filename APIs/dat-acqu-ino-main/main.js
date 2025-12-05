// importa os bibliotecas necessários
const serialport = require('serialport');
const express = require('express');
const mysql = require('mysql2');

// constantes para configurações
const SERIAL_BAUD_RATE = 9600;
const SERVIDOR_PORTA = 3300;

// habilita ou desabilita a inserção de dados no banco de dados
const HABILITAR_OPERACAO_INSERIR = true;

// função para comunicação serial
const serial = async (
    valoresSensorTemperatura,
    valoresSensorUmidade,
) => {

    // conexão com o banco de dados MySQL
    let poolBancoDados = mysql.createPool(
        {
            host: 'localhost',
            user: 'sustentatech',
            password: 'Lucas@2025',
            database: 'sustentaTech',
            port: 3306
        }
    ).promise();

    // lista as portas seriais disponíveis e procura pelo Arduino
    const portas = await serialport.SerialPort.list();
    const portaArduino = portas.find((porta) => porta.vendorId == 2341 && porta.productId == 43);
    if (!portaArduino) {
        throw new Error('O arduino não foi encontrado em nenhuma porta serial');
    }

    // configura a porta serial com o baud rate especificado
    const arduino = new serialport.SerialPort(
        {
            path: portaArduino.path,
            baudRate: SERIAL_BAUD_RATE
        }
    );

    // evento quando a porta serial é aberta
    arduino.on('open', () => {
        console.log(`A leitura do arduino foi iniciada na porta ${portaArduino.path} utilizando Baud Rate de ${SERIAL_BAUD_RATE}`);
    });

    // processa os dados recebidos do Arduino
    arduino.pipe(new serialport.ReadlineParser({ delimiter: '\r\n' })).on('data', async (data) => {
        console.log(data);
        const valores = data.split(';');
        const sensorUmidade = parseInt(valores[0]);
        const sensorTemperatura = parseFloat(valores[1]);

        // armazena os valores dos sensores nos arrays correspondentes
        valoresSensorTemperatura.push(sensorTemperatura);
        valoresSensorUmidade.push(sensorUmidade);

        // insere os dados no banco de dados (se habilitado)
        if (HABILITAR_OPERACAO_INSERIR) {

            // este insert irá inserir os dados na tabela "medida"
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (1, ?, ?)',
                [sensorTemperatura, sensorUmidade]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (2, ?, ?)',
                [sensorTemperatura - 10, sensorUmidade - 15]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (3, ?, ?)',
                [sensorTemperatura + 6, sensorUmidade + 25]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (4, ?, ?)',
                [sensorTemperatura + 3, sensorUmidade + 8]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (5, ?, ?)',
                [sensorTemperatura + 10, sensorUmidade + 15]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (6, ?, ?)',
                [sensorTemperatura + 10, sensorUmidade + 15]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (7, ?, ?)',
                [sensorTemperatura + 5, sensorUmidade + 8]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (8, ?, ?)',
                [sensorTemperatura - 10, sensorUmidade + 15]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (9, ?, ?)',
                [sensorTemperatura - 8, sensorUmidade + 2]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (10, ?, ?)',
                [sensorTemperatura - 6, sensorUmidade + 15]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (11, ?, ?)',
                [sensorTemperatura + 10, sensorUmidade + 15]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (12, ?, ?)',
                [sensorTemperatura + 10, sensorUmidade + 15]
            );
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (13, ?, ?)',
                [sensorTemperatura, sensorUmidade]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (14, ?, ?)',
                [sensorTemperatura - 10, sensorUmidade - 15]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (15, ?, ?)',
                [sensorTemperatura + 6, sensorUmidade + 25]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (16, ?, ?)',
                [sensorTemperatura + 3, sensorUmidade + 8]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (17, ?, ?)',
                [sensorTemperatura + 10, sensorUmidade + 15]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (18, ?, ?)',
                [sensorTemperatura + 10, sensorUmidade + 15]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (19, ?, ?)',
                [sensorTemperatura + 10, sensorUmidade + 15]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (20, ?, ?)',
                [sensorTemperatura + 10, sensorUmidade + 15]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (21, ?, ?)',
                [sensorTemperatura + 10, sensorUmidade + 15]
            );
            console.log("valores inseridos no banco: ", sensorTemperatura + ", " + sensorUmidade);
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (22, ?, ?)',
                [sensorTemperatura - 20, sensorUmidade - 20]
            );
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (23, ?, ?)',
                [sensorTemperatura - 20, sensorUmidade - 20]
            );
            await poolBancoDados.execute(
               'INSERT INTO registro (fkSensor, temperatura, umidade) VALUES (24, ?, ?)',
                [sensorTemperatura - 15, sensorUmidade + 15]
            );
        }

    });

    // evento para lidar com erros na comunicação serial
    arduino.on('error', (mensagem) => {
        console.error(`Erro no arduino (Mensagem: ${mensagem}`)
    });
}

// função para criar e configurar o servidor web
const servidor = (
    valoresSensorTemperatura,
    valoresSensorUmidade
) => {
    const app = express();

    // configurações de requisição e resposta
    app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });

    // inicia o servidor na porta especificada
    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });

    // define os endpoints da API para cada tipo de sensor
    app.get('/sensores/sensorTemperatura', (_, response) => {
        return response.json(valoresSensorTemperatura);
    });
    app.get('/sensores/sensorUmidade', (_, response) => {
        return response.json(valoresSensorUmidade);
    });
}

// função principal assíncrona para iniciar a comunicação serial e o servidor web
(async () => {
    // arrays para armazenar os valores dos sensores
    const valoresSensorTemperatura = [];
    const valoresSensorUmidade = [];

    // inicia a comunicação serial
    await serial(
        valoresSensorTemperatura,
        valoresSensorUmidade
    );

    // inicia o servidor web
    servidor(
        valoresSensorTemperatura,
        valoresSensorUmidade
    );
})();