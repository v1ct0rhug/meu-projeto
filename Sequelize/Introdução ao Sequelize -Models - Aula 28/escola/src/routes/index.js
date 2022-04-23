const express = require('express');
const router = express.Router();
const AlunosController = require ('../controllers/AlunosControllers')

/* GET home page. */        /* Usou Try/Catch para mostrar os erros que estam dando*/  /* Usou Aluno.findAll para mostrar todos alunos do database*/
router.get('/', AlunosController.index);

module.exports = router;
