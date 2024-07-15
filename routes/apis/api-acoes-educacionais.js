// IMPORTAÇÃO
var express = require('express');
var router = express.Router();
const db = require('../../config/config_database_pi');

//LISTA TODAS AÇÕES EDUCACIONAIS - ok
router.get('/', async function(req,res,next){
    const query = 'SELECT * FROM acoes_educacionais'
    try {
        const data = await db.any(query)
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
})
//DETALHES DA AÇÃO EDUCACIONAL - ok
router.get('/:id_acao', async function(req, res, next) {
    const id = req.params.id_acao;
    const query = `SELECT * FROM acoes_educacionais WHERE id_acao= $1`
    try {
        console.log(req.body)
        const data = await db.one(query,id)
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
});
// INSERE UM NOVO ALUNO
router.post('/', async function(req,res,next){
    const nome = req.body.nome
    const id_acao = req.body.id_acao
    const data_solicitacao = req.body.data_solicitacao
    const data_conclusao = req.body.data_conclusao

    const query = `
    INSERT INTO alunos (id_acao, nome, data_solicitacao, data_conclusao) VALUES
    ($1, $2, $3, $4)
    `
    const values = [id_acao, nome, data_solicitacao, data_conclusao]
    try {
        const data = await db.any(query,values)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
})
// EDITA ALUNO
router.put('/:matricula', async function (req, res, next) {
    const matricula = req.params.matricula;
    const nome = req.body.nome
    const email = req.body.email
    const data_nascimento = req.body.data_nascimento

    console.log(req.body)

    const query = `
    UPDATE alunos
    SET
    nome = $2, email = $3, data_nascimento = $4
    WHERE matricula= $1   
    `
        
    const values = [matricula,nome,email,data_nascimento]
    try {
        const data = await db.any(query,values)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json({msg: error.msg})
    }

});
// DELETA ALUNO
router.delete('/:matricula', async function (req, res, next) {
    const matricula = req.params.matricula;
    const query = "DELETE FROM alunos WHERE matricula = $1"
    try {
        const data = await db.any(query,matricula)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
});
// EXPORTAÇÃO
module.exports = router;