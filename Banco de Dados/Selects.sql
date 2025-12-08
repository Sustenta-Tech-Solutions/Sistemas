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
    
INSERT INTO empresa (nomeEmpresa, cnpj, telefone, token) VALUES
	('Coamo', '75.904.383/0001-21', '(44)35998000', 'C0A5M0');
INSERT INTO empresa (nomeEmpresa, cnpj, telefone, token) VALUES
	('Cooperalfa', '83.305.235/0180-85', '(49)33217000', 'C0P3R4');
    
    
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

    
    select * from usuario;
    

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
    
INSERT INTO sensor (posicao, fkSilo, fkEmpresa) VALUES
('Topo', 1, 5), ('Centro', 1, 5), ('Base', 1, 5),
('Topo', 2, 5), ('Centro', 2, 5), ('Base', 2, 5),
('Topo', 3, 5), ('Centro', 3, 5), ('Base', 3, 5),
('Topo', 4, 5), ('Centro', 4, 5), ('Base', 4, 5),
('Topo', 5, 5), ('Centro', 5, 5), ('Base', 5, 5),
('Topo', 6, 5), ('Centro', 6, 5), ('Base', 6, 5),
('Topo', 7, 5), ('Centro', 7, 5), ('Base', 7, 5),
('Topo', 8, 5), ('Centro', 8, 5), ('Base', 8, 5),
('Topo', 9, 5), ('Centro', 9, 5), ('Base', 9, 5),
('Topo', 10, 5), ('Centro', 10, 5), ('Base', 10, 5),
('Topo', 11, 5), ('Centro', 11, 5), ('Base', 11, 5),
('Topo', 12, 5), ('Centro', 12, 5), ('Base', 12, 5),
('Topo', 13, 5), ('Centro', 13, 5), ('Base', 13, 5),
('Topo', 14, 5), ('Centro', 14, 5), ('Base', 14, 5),
('Topo', 15, 5), ('Centro', 15, 5), ('Base', 15, 5),
('Topo', 16, 5), ('Centro', 16, 5), ('Base', 16, 5),
('Topo', 17, 5), ('Centro', 17, 5), ('Base', 17, 5),
('Topo', 18, 5), ('Centro', 18, 5), ('Base', 18, 5),
('Topo', 19, 5), ('Centro', 19, 5), ('Base', 19, 5),
('Topo', 20, 5), ('Centro', 20, 5), ('Base', 20, 5),
('Topo', 21, 5), ('Centro', 21, 5), ('Base', 21, 5),
('Topo', 22, 5), ('Centro', 22, 5), ('Base', 22, 5),
('Topo', 23, 5), ('Centro', 23, 5), ('Base', 23, 5),
('Topo', 24, 5), ('Centro', 24, 5), ('Base', 24, 5),
('Topo', 25, 5), ('Centro', 25, 5), ('Base', 25, 5),
('Topo', 26, 5), ('Centro', 26, 5), ('Base', 26, 5),
('Topo', 27, 5), ('Centro', 27, 5), ('Base', 27, 5),
('Topo', 28, 5), ('Centro', 28, 5), ('Base', 28, 5),
('Topo', 29, 5), ('Centro', 29, 5), ('Base', 29, 5),
('Topo', 30, 5), ('Centro', 30, 5), ('Base', 30, 5),
('Topo', 31, 5), ('Centro', 31, 5), ('Base', 31, 5),
('Topo', 32, 5), ('Centro', 32, 5), ('Base', 32, 5);


INSERT INTO sensor (posicao, fkSilo, fkEmpresa) VALUES
('Topo', 1, 6), ('Centro', 1, 6), ('Base', 1, 6),
('Topo', 2, 6), ('Centro', 2, 6), ('Base', 2, 6),
('Topo', 3, 6), ('Centro', 3, 6), ('Base', 3, 6),
('Topo', 4, 6), ('Centro', 4, 6), ('Base', 4, 6),
('Topo', 5, 6), ('Centro', 5, 6), ('Base', 5, 6),
('Topo', 6, 6), ('Centro', 6, 6), ('Base', 6, 6),
('Topo', 7, 6), ('Centro', 7, 6), ('Base', 7, 6),
('Topo', 8, 6), ('Centro', 8, 6), ('Base', 8, 6),
('Topo', 9, 6), ('Centro', 9, 6), ('Base', 9, 6),
('Topo', 10, 6), ('Centro', 10, 6), ('Base', 10, 6),
('Topo', 11, 6), ('Centro', 11, 6), ('Base', 11, 6),
('Topo', 12, 6), ('Centro', 12, 6), ('Base', 12, 6);

    
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
    
SELECT * FROM empresa;
INSERT INTO silo (idSilo, numero, fkEmpresa) VALUES
(1, 1, 5),
(2, 2, 5),
(3, 3, 5),
(4, 4, 5),
(5, 5, 5),
(6, 6, 5),
(7, 7, 5),
(8, 8, 5),
(9, 9, 5),
(10, 10, 5),
(11, 11, 5),
(12, 12, 5),
(13, 13, 5),
(14, 14, 5),
(15, 15, 5),
(16, 16, 5),
(17, 17, 5),
(18, 18, 5),
(19, 19, 5),
(20, 20, 5),
(21, 21, 5),
(22, 22, 5),
(23, 23, 5),
(24, 24, 5),
(25, 25, 5),
(26, 26, 5),
(27, 27, 5),
(28, 28, 5),
(29, 29, 5),
(30, 30, 5),
(31, 31, 5),
(32, 32, 5);

INSERT INTO silo (idSilo, numero, fkEmpresa) VALUES
(1, 1, 6),
(2, 2, 6),
(3, 3, 6),
(4, 4, 6),
(5, 5, 6),
(6, 6, 6),
(7, 7, 6),
(8, 8, 6),
(9, 9, 6),
(10, 10, 6),
(11, 11, 6),
(12, 12, 6);


    
    
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

INSERT INTO registro (temperatura, umidade, fkSensor) VALUES
(32.41, 57.12, 26),
(21.84, 42.07, 27),
(36.92, 73.55, 28),

(27.55, 61.33, 29),
(33.47, 49.81, 30),
(19.92, 70.66, 31),

(38.14, 44.50, 32),
(22.63, 67.91, 33),
(29.07, 53.72, 34),

(31.28, 58.61, 35),
(24.67, 79.13, 36),
(18.92, 46.25, 37),

(34.75, 63.44, 38),
(28.17, 71.92, 39),
(20.56, 39.88, 40),

(37.19, 55.02, 41),
(26.48, 62.77, 42),
(23.33, 81.94, 43),

(35.02, 48.60, 44),
(29.77, 69.51, 45),
(17.85, 36.70, 46),

(33.41, 52.16, 47),
(25.69, 74.80, 48),
(30.55, 68.12, 49),

(19.34, 41.92, 50),
(36.72, 59.77, 51),
(28.99, 63.84, 52),

(22.41, 70.55, 53),
(31.88, 50.33, 54),
(34.11, 76.24, 55),

(27.04, 57.77, 56),
(18.90, 43.12, 57),
(33.99, 72.51, 58),

(30.44, 64.19, 59),
(24.60, 47.55, 60),
(37.28, 81.30, 61),

(21.77, 39.82, 62),
(29.11, 66.44, 63),
(35.48, 59.02, 64),

(32.69, 53.22, 65),
(25.33, 78.88, 66),
(19.55, 45.96, 67),

(34.02, 62.18, 68),
(27.92, 69.15, 69),
(22.06, 41.72, 70),

(38.55, 56.91, 71),
(26.22, 73.34, 72),
(20.77, 38.51, 73),

(33.14, 49.63, 74),
(24.88, 80.42, 75),
(29.77, 63.10, 76),

(17.99, 37.22, 77),
(35.70, 52.99, 78),
(31.44, 67.51, 79),

(23.90, 71.30, 80),
(36.18, 60.15, 81),
(28.66, 54.88, 82),

(20.12, 44.77, 83),
(34.88, 58.66, 84),
(27.51, 72.91, 85),

(31.22, 47.80, 86),
(25.14, 78.16, 87),
(29.88, 62.33, 88),

(19.44, 43.50, 89),
(37.09, 59.71, 90),
(33.55, 68.90, 91),

(21.08, 39.63, 92),
(30.72, 74.55, 93),
(35.11, 55.21, 94),

(28.19, 63.44, 95),
(22.50, 49.30, 96),
(36.66, 80.91, 97),

(24.17, 45.72, 98),
(32.88, 67.11, 99),
(29.04, 58.50, 100),

(18.74, 40.33, 101),
(34.22, 61.99, 102),
(26.55, 72.55, 103),

(31.77, 52.22, 104),
(25.66, 76.40, 105),
(28.91, 64.15, 106),

(20.51, 48.71, 107),
(36.44, 57.90, 108),
(33.72, 70.22, 109),

(23.15, 42.88, 110),
(29.77, 69.55, 111),
(35.55, 60.19, 112),

(27.30, 55.99, 113),
(18.81, 46.41, 114),
(34.91, 73.66, 115),

(30.59, 63.14, 116),
(24.44, 50.08, 117),
(37.33, 79.91, 118),

(21.66, 38.52, 119),
(33.08, 66.30, 120),
(28.55, 59.14, 121);
 

SELECT * FROM sensor WHERE fkEmpresa = 5;


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
        
SELECT * FROM vw_mediaMedicoes WHERE Empresa = 5 LIMIT 32;


SELECT * FROM registro WHERE fkSensor = 1 AND fkEmpresa = 1;



-- Seleciona os 7 últimos registros de cada sensor do silo

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
    WHERE s.fkSilo = 7 -- <--- AQUI entra o ID dinâmico
) AS registros_com_num
WHERE rn <= 7
ORDER BY posicao, dtHora Desc;



SELECT * FROM registro WHERE fkSensor = 1 AND dtHora IN ('2025-11-28 13:23:21', '2025-11-28 14:29:00');

SELECT *
FROM registro
WHERE fkSensor = 1 AND dtHora >= NOW() - INTERVAL 90 MINUTE 
ORDER BY dtHora DESC LIMIT 7;
