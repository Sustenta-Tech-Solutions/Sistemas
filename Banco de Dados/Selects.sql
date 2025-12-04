/* NOMES: FELIPE BARBOSA DO PATROCÍNIO- RA: 01252103 
		  GABRIEL DOS SANTOS MUNIZ DE JESUS - RA: 01252022
		  JOSUÉ ALVAREZ AVENDANO- RA: 01252002
		  LUCAS CIECZINSKI PEREZ - RA: 01252009
		  NICOLLY DE SOUZA OLSAK - RA: 01252123
		  PAULO HENRIQUE BAMBINO - RA: 01252127
*/

-- Criação do banco de dados
CREATE DATABASE sustentaTech;

-- Seleção do banco de dados
USE sustentaTech;


-- Criação da tabela 'endereço' com suas respectivas colunas e restrições
CREATE TABLE endereco (
idEndereco INT PRIMARY KEY AUTO_INCREMENT,
cep CHAR(9),
logradouro VARCHAR(100),
cidade VARCHAR(60),
estado CHAR (2),
numero VARCHAR(7)
);

INSERT INTO endereco (cep, logradouro, cidade, estado, numero) VALUES
	('01310-930','Av. Paulista', 'São Paulo', 'SP', '2150'),
    ('04578-000', 'Av. das Nações Unidas', 'São Paulo', 'SP', '12901'),
    ('01414-001', 'Rua Haddock Lobo', 'São Paulo', 'SP', '595');
    
SELECT * FROM endereco;

-- Criação da tabela 'empresa' com suas respectivas colunas e restrições
CREATE TABLE empresa(
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
nomeEmpresa VARCHAR(60) NOT NULL,
cnpj CHAR(18) UNIQUE,
token CHAR(6) UNIQUE NOT NULL,
telefone VARCHAR(14),
dtCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
fkEndereco INT,
	CONSTRAINT fkEndereco
		FOREIGN KEY (fkEndereco)
			REFERENCES endereco(idEndereco)
);


INSERT INTO empresa (nomeEmpresa, cnpj, telefone, token) VALUES
	('Banco Safra', '58.160.789/0001-28', '(11)99334-2697', 'S4F8R1'),
    ('Atos', '31.259.291/4613-03', '(94)99701-7259', 'A7T0X2'),
    ('SPTech', '04.726.609/5142-02', '(44)99238-1547', 'A1K7W8');
    
INSERT INTO empresa (nomeEmpresa, cnpj, telefone, token) VALUES
	('SustentaTech', '13.223.008/9823-06', '(11)973239898', 'S8T3T5');
    
UPDATE empresa SET fkEndereco = 1
	WHERE idEmpresa = 1;
UPDATE empresa SET fkEndereco = 2
	WHERE idEmpresa = 2;    
UPDATE empresa SET fkEndereco = 3
	WHERE idEmpresa = 3;

/* ------------------------------------------------------------------------------------------------------- */

-- Criação da tabela 'usuario' com suas respectivas colunas e restrições
CREATE TABLE usuario(
idUsuario INT AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
sobrenome VARCHAR(50) NOT NULL,
email VARCHAR(60) NOT NULL,
senha VARCHAR(50) NOT NULL,
telefone VARCHAR(14),
dtCriacao DATETIME DEFAULT CURRENT_TIMESTAMP,
fkEmpresa INT,
CONSTRAINT fkEmpresaUsuario
	FOREIGN KEY (fkEmpresa)
		REFERENCES empresa(idEmpresa),
CONSTRAINT pkCompostaEmpresa
	PRIMARY KEY (idUsuario, fkEmpresa)
);

INSERT INTO usuario (nome, sobrenome, email, senha, nivelUsuario, telefone, fkToken) VALUES
	('Lucas', 'Peres', 'lucas.peres@sptech.school', 'Lucas@2020', 'ADM', '(11)97323-9898', 'A7T0X2'),
    ('Felipe', 'Patrocionio', 'felipe.patrocionio@sptech.school', 'Felipe@2020', 'ADM', '(11)99999-9999', 'S4F8R1');
    
    select * from usuario;
    
SELECT usuario.nome AS 'Usuario',
		usuario.email AS 'Email',
		nivelUsuario AS 'Nivel de acesso',
        usuario.telefone AS 'Contato do usuario',
        fkToken AS 'Token da Empresa',
        nomeEmpresa AS 'Empresa',
        empresa.telefone AS 'Contato da empresa'
        FROM usuario JOIN empresa
        ON fkToken = token;

/* ------------------------------------------------------------------------------------------------------- */

-- Criação da tabela 'sensor' com suas respectivas colunas e restrições
CREATE TABLE sensor(
idSensor INT PRIMARY KEY AUTO_INCREMENT,
dtInstalacao DATETIME DEFAULT CURRENT_TIMESTAMP,
posicao VARCHAR(10),
fkSilo INT,
fkEmpresa INT,
CONSTRAINT fkSensorSilo
	FOREIGN KEY (fkSilo)
		REFERENCES silo(idSilo),
CONSTRAINT fkSensorEmpresa 
	FOREIGN KEY (fkEmpresa)
		REFERENCES empresa(idEmpresa)
);

INSERT INTO sensor (posicao, fkSilo, fkEmpresa) VALUES
	('Topo', 1, 1),
    ('Centro', 1, 1),
    ('Base', 1, 1);

INSERT INTO sensor (posicao, fkSilo, fkEmpresa) VALUES
	('Topo', 5, 1),
    ('Centro', 5, 1),
    ('Base', 5, 1);

INSERT INTO sensor (posicao, fkSilo, fkEmpresa) VALUES
	('Topo', 6, 1),
    ('Centro', 6, 1),
    ('Base', 6, 1);

INSERT INTO sensor (posicao, fkSilo, fkEmpresa) VALUES
	('Topo', 7, 1),
    ('Centro', 7, 1),
    ('Base', 7, 1);
    
INSERT INTO sensor (posicao, fkSilo, fkEmpresa) VALUES
	('Topo', 8, 1),
    ('Centro', 8, 1),
    ('Base', 8, 1);
 
INSERT INTO sensor (posicao, fkSilo, fkEmpresa) VALUES
	('Topo', 2, 1),
    ('Centro', 2, 1),
    ('Base', 2, 1);
    
INSERT INTO sensor (posicao, fkSilo, fkEmpresa) VALUES
	('Topo', 3, 1),
    ('Centro', 3, 1),
    ('Base', 3, 1);

INSERT INTO sensor (posicao, fkSilo, fkEmpresa) VALUES
	('Topo', 4, 1),
    ('Centro', 4, 1),
    ('Base', 4, 1);
    
SELECT * FROM sensor;
    
SELECT * FROM sensor;


/* ------------------------------------------------------------------------------------------------------- */

-- Criação da tabela 'silo' com suas respectivas colunas e restrições

CREATE TABLE silo(
idSilo INT, 
numero INT,
fkEmpresa INT,
CONSTRAINT fkSiloEmpresa
	FOREIGN KEY (fkEmpresa)
		REFERENCES empresa(idEmpresa),
CONSTRAINT pkComposta
	PRIMARY KEY (idSilo, fkEmpresa)
);

INSERT INTO silo (idSilo, numero, fkEmpresa) VALUES
	(1, 1, 1),
    (2, 2, 1),
    (3, 3, 1),
    (4, 4, 1),
    (5, 5, 1),
    (6, 6, 1),
    (7, 7, 1),
    (8, 8, 1),
	(1, 1, 2),
    (2, 2, 2),
    (3, 3, 2),
    (4, 4, 2),
    (5, 5, 2),
    (6, 6, 2);
/* ------------------------------------------------------------------------------------------------------- */

-- Criação da tabela 'registro' com suas respectivas colunas e restrições
CREATE TABLE registro(
idRegistro INT AUTO_INCREMENT,
temperatura DECIMAL(5,2),
umidade DECIMAL(5,2),
dtHora DATETIME DEFAULT CURRENT_TIMESTAMP,
fkSensor INT,
CONSTRAINT fkRegistroSensor 
	FOREIGN KEY (fkSensor)
        REFERENCES sensor(idSensor),
CONSTRAINT pkComposta
	PRIMARY KEY (idRegistro, fkSensor)

);

SELECT idSensor AS 'Identificação do sensor',
		fkEmpresa AS 'Empresa do sensor',
        temperatura AS 'Medição de Temperatura',
        umidade AS 'Medição de Umidade',
        dtHora AS 'Hora da medição'
        FROM sensor JOIN empresa 
        ON fkEmpresa = idEmpresa
        JOIN registro 
        ON fkSensor = idSensor;
        
        
show tables;
DESC empresa;
DESC usuario;
DESC sensor;
SELECT * FROM empresa;
SELECT * FROM endereco;
SELECT * FROM sensor;
SELECT * FROM registro;
SELECT * FROM silo;

INSERT INTO registro
SELECT * FROM usuario;

--  --------------------------------
-- SELECTS e VIEWS

-- SELECT e VIEW função autenticar 
SELECT u.nome AS nomeUsuario,
		u.email AS emailUsuario,
        u.senha AS senha,
        u.fkEmpresa AS idEmpresa,
        e.nomeEmpresa AS empresa,
        e.token AS token
        FROM usuario u JOIN empresa e
        ON u.fkEmpresa = e.idEmpresa;
        
CREATE VIEW vw_autenticar AS 
	SELECT u.nome AS nomeUsuario,
		u.email AS emailUsuario,
        u.senha AS senha,
        u.fkEmpresa AS idEmpresa,
        e.nomeEmpresa AS empresa,
        e.token AS token
        FROM usuario u JOIN empresa e
        ON u.fkEmpresa = e.idEmpresa;

SELECT * FROM vw_autenticar WHERE emailUsuario = 'felipe@gmail.com' AND senha = 'felipe@2025';


SELECT MAX(numero) FROM silo WHERE fkEmpresa = 1;
        
        
-- ----------------------------
SELECT
		AVG(registro.temperatura) AS temperaturaMedia,
		AVG(registro.umidade) AS umidadeMedia,
		HOUR(registro.dtHora) AS HoraDoDia,
		s.fkSilo AS Silo,
        s.posicao AS Posicao,
        s.fkEmpresa AS Empresa
	FROM
		registro
	JOIN
		sensor s ON registro.fkSensor = s.idSensor
	GROUP BY
		HoraDoDia,
		Silo,
        Posicao,
        Empresa
	ORDER BY
		HoraDoDia DESC;
    
CREATE VIEW vw_mediaMedicoes AS 
	SELECT
		AVG(registro.temperatura) AS temperaturaMedia,
		AVG(registro.umidade) AS umidadeMedia,
		registro.dtHora AS HoraDoDia,
		s.fkSilo AS Silo,
        s.fkEmpresa AS Empresa
	FROM
		registro
	JOIN
		sensor s ON registro.fkSensor = s.idSensor
	GROUP BY
		HoraDoDia,
		Silo,
        Empresa
	ORDER BY
		HoraDoDia DESC;
        
SELECT * FROM vw_mediaMedicoes WHERE Empresa = 1 LIMIT 8;


SELECT * FROM registro WHERE fkSensor = 1 AND fkEmpresa = 1;

-- Supondo que você tenha o ID do silo que quer consultar
SET @siloIdParametro = 1;

-- Seleciona os 7 últimos registros de cada sensor do silo
SELECT r.*
FROM registro r
JOIN sensor s ON r.fkSensor = s.idSensor
WHERE s.fkSilo = @idSiloSelecionado
ORDER BY r.fkSensor, r.dtHora DESC LIMIT 7;

WITH sensores_do_silo AS (
    SELECT idSensor, posicao
    FROM sensor
    WHERE fkSilo = 3  -- id do silo selecionado
)
, registros_com_num AS (
    SELECT
        r.idRegistro,
        r.fkSensor,
        r.temperatura,
        r.umidade,
        r.dtHora,
        s.posicao,
        ROW_NUMBER() OVER (PARTITION BY r.fkSensor ORDER BY r.dtHora DESC) AS rn
    FROM registro r
    JOIN sensores_do_silo s ON r.fkSensor = s.idSensor
)
SELECT *
FROM registros_com_num
WHERE rn <= 7
ORDER BY posicao, dtHora Desc;

SELECT *
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
    WHERE s.fkSilo = @siloIdParametro -- <--- AQUI entra o ID dinâmico
) AS registros_com_num
WHERE rn <= 7
ORDER BY posicao, dtHora Desc;



SELECT * FROM registro WHERE fkSensor = 1 AND dtHora IN ('2025-11-28 13:23:21', '2025-11-28 14:29:00');

SELECT *
FROM registro
WHERE fkSensor = 1 AND dtHora >= NOW() - INTERVAL 90 MINUTE 
ORDER BY dtHora DESC LIMIT 7;
