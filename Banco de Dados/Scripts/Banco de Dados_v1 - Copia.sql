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

INSERT INTO sensor (fkEmpresa, silo, status) VALUES
	(1, 1, 'ATIVO'),
    (1, 2, 'ATIVO'),
    (2, 1, 'ATIVO');
    
INSERT INTO sensor (fkEmpresa, silo, status) VALUES
	(1, 3, 'ATIVO'),
    (2, 2, 'ATIVO'),
    (2, 3, 'ATIVO');
    
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
        silo AS 'Silo do sensor',
        status AS 'Status do sensor',
        temperatura AS 'Medição de Temperatura',
        umidade AS 'Medição de Umidade',
        dtHora AS 'Hora da medição'
        FROM sensor JOIN empresa 
        ON fkEmpresa = idEmpresa
        JOIN registro 
        ON fkSensor = idSensor;
        
        
show tables;