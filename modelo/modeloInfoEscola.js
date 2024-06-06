const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Endereco = require('./modeloEndereco')

const InfoEscola = conexao.define('InfoEscola', {
    codEscola: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    CEP:{
        type: Sequelize.STRING(8),
        allowNull: false,
        unique: true
    },
    telefone:{
        type: Sequelize.STRING(11),
        allowNull: false
    },
    email:{
        type: Sequelize.STRING(30),
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
}, {
    timestamps: false
});

InfoEscola.sync({ force: false });

module.exports = InfoEscola;