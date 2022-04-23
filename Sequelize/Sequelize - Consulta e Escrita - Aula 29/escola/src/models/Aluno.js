module.exports = (sequelize, dataTypes) => {
    const Aluno = sequelize.define ('Aluno', {
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: dataTypes.STRING,
        allowNull: false
    },
    sobrenome: {
        type: dataTypes.STRING,
        allowNull:false
    },
    matricula: {
       type: dataTypes.STRING,
       allowNull:false
    }        
    }
    ,{
        tableName: 'aluno',
        timestamps: false
    });
    
    return Aluno;
}