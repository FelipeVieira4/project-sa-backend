const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Usuario = require('./modeloUsuario');
const Sala = require('./modeloSala');

const Turma = conexao.define('turmas', {
    codTurma: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nomeTurma: {
        type: Sequelize.STRING,
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
    codSala: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Sala,
            key: 'codSala',
        },
        onDelete: 'CASCADE'
    }
}, {
    timestamps: false
});

Turma.sync({ force: false });

module.exports = Turma;