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

-- Criação da tabela 'empresa' com suas respectivas colunas e restrições
CREATE TABLE empresa(
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
nomeEmpresa VARCHAR(60) NOT NULL,
cnpj CHAR(18) UNIQUE,
telFixo VARCHAR(14),
telCelular VARCHAR(14),
cep CHAR(9),
endereco VARCHAR(100),
cidade VARCHAR(60),
estado CHAR(2),
dtCadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

/* ------------------------------------------------------------------------------------------------------- */

-- Criação da tabela 'usuario' com suas respectivas colunas e restrições
CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
sobrenome VARCHAR(50) NOT NULL,
fkEmpresa INT,
CONSTRAINT fkUsuarioEmpresa 
	FOREIGN KEY (fkEmpresa)
		REFERENCES empresa(idEmpresa),
email VARCHAR(60) NOT NULL,
userName VARCHAR(30) NOT NULL UNIQUE,
senha VARCHAR(50) NOT NULL,
nivelUsuario CHAR(3) NOT NULL
    CHECK( nivelUsuario IN('ADM', 'SUB')),
dtNascimento DATE NOT NULL,
telCelular VARCHAR(11),
telFixo VARCHAR(10),
dtCriacao DATETIME DEFAULT CURRENT_TIMESTAMP,
status VARCHAR(7),
	CHECK ( status IN('ATIVO','INATIVO'))
);

/* ------------------------------------------------------------------------------------------------------- */

-- Criação da tabela 'medicao' com suas respectivas colunas e restrições
CREATE TABLE medicao(
idMedicao BIGINT PRIMARY KEY AUTO_INCREMENT,
fkSensor INT,
CONSTRAINT fkMedicaoSensor 
	FOREIGN KEY (fkSensor)
        REFERENCES sensor(idSensor),
temperatura DECIMAL(5,2),
umidade DECIMAL(5,2),
dtHora DATETIME DEFAULT CURRENT_TIMESTAMP
);

/* ------------------------------------------------------------------------------------------------------- */

-- Criação da tabela 'sensor' com suas respectivas colunas e restrições
CREATE TABLE sensor(
idSensor INT PRIMARY KEY AUTO_INCREMENT,
fkEmpresa INT,
codigoSensor VARCHAR(30) UNIQUE NOT NULL,
descricao VARCHAR(100),
localizacao VARCHAR(100),
status VARCHAR(10)
	CHECK( status IN('ATIVO','INATIVO','MANUTENCAO')),
dtInstalacao DATETIME DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT fkSensorEmpresa 
	FOREIGN KEY (fkEmpresa)
		REFERENCES empresa(idEmpresa)
);

