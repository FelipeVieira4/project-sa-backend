const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Endereco = require('../endereco/modeloEndereco')

const Materia = conexao.define('Materias', {
    codMateria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },

    professor: {
        type: Sequelize.STRING(150),
        allowNull: false
    
    },
    descricao: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
}, {
    timestamps: false
});

Materia.sync({ force: false });

module.exports = Materia;