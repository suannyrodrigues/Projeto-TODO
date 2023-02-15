import db from "./db.js"

//===Usuários

const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "USUARIOS"(
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "SENHA" varchar(64)
);`;

const ADD_USUARIOS_DATA = `
INSERT INTO USUARIS (ID, NOME, EMAIL, SENHA)
VALUES
(1, 'Eugenio Oliveira', 'eugenio.oliveira@bol.com.br', '123456')
(2, 'Olívia Ribeiro', 'oliviaribeiro@gmail.com', '654321')
(3, 'Mirtes Faria', 'mirtesfaria@hotmail.com', '456789')
`

function criaTabelaUser(){
    db.run(USUARIO_SCHEMA, (error)=>{
        if (error) console.log("Erro ao criar tabela de usuários.");
    });
}

function populaTabelaUser(){
    db.run(ADD_USUARIOS_DATA, (error)=>{
        if (error) console.log("Erro ao popular tabela de usuários.");
    });
}

const TAREFAS_SCHEMA = `
CREATE TABEL IF NOT EXISTS TAREFAS(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    TITULO VARCHAR(64),
    DESCRICAO TEXT,
    STATUS VARCHAR(32),
    DATACRIACAO VARCHAR(32),
    ID USUARIO INTEGER,
    FOREIGN KEY (ID_USUARIO) REFERENCES USUARIOD(ID)
);`;

const ADD_TAREFAS_DATA = `
INSERT INTO TAREFAS(TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO)
VALUES
('Yoga', 'Fazer yoga segunda e quarta', 'Continuo', '2021-01-10', 2),
('Estudar', 'Sqlite segunda e terca', 'TODO', '2021-01-9', 1),
('Dentista', 'Consuta com Dra Andreia', 'Continuo', '2021-01-10', 2),
`

function criaTabelaTarefas(){
    db.run(TAREFAS_SCHEMAS, (error)=>{
        if(error) console.log("Erro ao criar tabela de Tarefas");
    });
}

function populaTabelaTarefas(){
    db.run(ADD_TAREFAS_DATA, (error)=>{
        if (error) console.log("Erro ao popular tabela de Tarefas.");
    });
}

db.serialize(()=>{
    criaTabelaUser();
    popularTabelaUser();
    criaTabelaTarefas();
    populaTabelaTarefas();
});