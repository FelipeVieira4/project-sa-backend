const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Endereco = require('../endereco/modeloEndereco')

const Sala = conexao.define('Sala', {
    codSala: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
   
    Bloco: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    
    
    Numero: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    
}, {
    timestamps: false
});

Sala.sync({ force: false });

module.exports = Sala;