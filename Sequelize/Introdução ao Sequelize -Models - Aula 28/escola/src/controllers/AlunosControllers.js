const { Aluno } = require ('../models')

module.exports ={
    async index (req, res, next) {

        try {
          const alunos = await  Aluno.findAll();
      
        res.render('index', { title: 'Express', alunos });
      
        } catch (erro) {
          console.log(erro)
        }      
      }
}