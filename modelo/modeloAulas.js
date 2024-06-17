const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Materia = require('./modeloMateria');
const Usuario = require('./modeloUsuario');
const Turma = require('./modeloTurma')

const Aula = conexao.define('aulas', {
    codAula: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    horario: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    codProfessor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'codUsuario',
        },
        onDelete: 'CASCADE'   
    },
    codMateria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Materia,
            key: 'codMateria',
        },
        onDelete: 'CASCADE'   
    }
}, {
    timestamps: false
});

Aula.sync({ force: false });

module.exports = Aula;