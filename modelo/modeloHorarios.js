const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Endereco = require('../endereco/modeloEndereco')

const Usuario = conexao.define('Horarios', {
    codHorario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Horario: {
        type: Sequelize.STRING(5),
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
    }
}, {
    timestamps: false
});

Usuario.sync({ force: false });

module.exports = Usuario;