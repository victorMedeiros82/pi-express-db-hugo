-- Remove o banco de dados, caso exista
DROP DATABASE exemplo_db;

-- Criar o banco de dados
CREATE DATABASE exemplo_db;

-- Conectar ao banco de dados exemplo
\c exemplo_db

-- Criar a tabela alunos
CREATE TABLE alunos (
    matricula INT PRIMARY KEY,
    nome VARCHAR(50),
    email VARCHAR(255),
    data_nascimento DATE
);

-- Inserir 8 linhas na tabela alunos
INSERT INTO alunos (matricula, nome, email, data_nascimento) VALUES
(1, 'Ana Silva', 'ana.silva@example.com', DATE '2000-01-15'),
(2, 'Bruno Souza', 'bruno.souza@example.com', DATE '1999-05-22'),
(3, 'Carla Pereira', 'carla.pereira@example.com', DATE '2001-09-10'),
(4, 'Daniel Santos', 'daniel.santos@example.com', DATE '2000-11-30'),
(5, 'Eduarda Lima', 'eduarda.lima@example.com', DATE '1998-12-05'),
(6, 'Fernando Costa', 'fernando.costa@example.com', DATE '1997-07-18'),
(7, 'Gabriela Oliveira', 'gabriela.oliveira@example.com', DATE '1999-03-27'),
(8, 'Henrique Alves', 'henrique.alves@example.com', DATE '2001-08-16');