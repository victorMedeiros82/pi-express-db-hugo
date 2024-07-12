// IMPORTAÇÃO
const {localApi} = require('../../config/config_axios');
var express = require('express');
var router = express.Router();
const path = require('path')

// LISTAGEM DOS ALUNOS
router.get('/', async function(req, res, next) {
    try {
        const response = await localApi.get('/api/v1/alunos');
        const alunos = response.data;
        const viewdata = {title: 'Alunos',alunos};
        res.status(200).render('all_students',viewdata)
    } catch (error) {
        res.json({msg: error.message})
    }
    
});
// NOVO ALUNO
router.get('/new', async function(req, res, next) {
    parametro = "create"
    const data= {metodo:"POST",parametro, title: 'Novo Aluno',buttonText:'Adicionar Aluno'}
    res.render('form',data);
});
// DETALHES DO ALUNO
router.get('/:matricula', async function(req,res,next){
    const matricula = req.params.matricula;
    try {
        let response = await localApi.get('/api/v1/alunos/' + matricula)
        let aluno = response.data;
        let viewData = {aluno, title: 'Detalhes do Aluno'}
        res.status(200).render('details_student', viewData);
    } catch (error) {
        res.json({msg: error.message})
    }
})
router.get('/edit/:matricula', async function(req, res, next) {
    const matricula = req.params.matricula;
    const apiUrlPath = '/api/v1/alunos/' + matricula
    const parametro = matricula
    const viewData = {metodo:"POST",parametro, title: 'Editar Aluno',buttonText:'Atualizar Aluno'}

    try {
        const response = await localApi.get(apiUrlPath);
        const aluno = response.data;
        viewData.aluno = aluno;

        res.status(200).render('form',viewData)
    } catch (error) {
        res.json({msg: error.message})
    }

});
// POST
router.post('/create', async function(req,res,next){
    const apiUrlPath = '/api/v1/alunos/'
    const data = req.body

    try {
        await localApi.post(apiUrlPath,data);
    } catch (error) {
        console.error(error.message)
    }finally{
        res.redirect('/alunos/')
    }

})
// PUT 
router.put('/:matricula', async function (req, res, next) {
    const matricula = req.params.matricula;
    const apiUrlPath = '/api/v1/alunos/' + matricula

    const data = req.body

    try {
        await localApi.put(apiUrlPath,data);
        res.redirect('/alunos/' + matricula)
    } catch (error) {
        console.error(error.message)
    }
});
// DELETE
router.delete('/:matricula', async function (req, res, next) {
    const matricula = req.params.matricula;
    try {
        await localApi.delete('/api/v1/alunos/' + matricula)
    } catch (error) {
        res.json({msg: error.message})
    }finally{
        res.status(200).redirect(303, '/alunos');
    }
});
// EXPORTAÇÃO
module.exports = router;