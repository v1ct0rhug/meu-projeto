const express = require ('express');
const router = express.Router();
const AlunosController = require ('../controllers/AlunosControllers');



// C - Criação de alunos
router.get('/cadastrar', AlunosController.form);
router.post('/cadastrar', AlunosController.criar)

// R - Leitura de alunos
router.get ('/', AlunosController.index)


// U - Atualização de alunos
router.get('/editar/:id', AlunosController.form)
router.post('/editar/:id', AlunosController.editar)

//D - Remoção de Alunos
router.post('/deletar/:id', AlunosController.deletar)

module.exports = router;