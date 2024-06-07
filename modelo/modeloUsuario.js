const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Endereco = require('../modelo/modeloEndereco')

const Usuario = conexao.define('Usuarios', {
    codUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    CPF:{
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true
    },
    CNPJ:{
        type: Sequelize.STRING(14),
        allowNull: false
    },
    dataNascimento:{
        type: Sequelize.DATE,
        allowNull: false
    },
    codEndereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Endereco,
            key: 'codEndereco',
        },
        onDelete: 'CASCADE'   
    },
    // 1 - Aluno, 2 - Proffesor, 3 - Direção
    nivelPermissao:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: false
});

Usuario.sync({ force: false });

module.exports = Usuario;