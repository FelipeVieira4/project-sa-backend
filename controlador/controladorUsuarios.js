const express = require('express');
const Usuario = require('../modelo/modeloUsuario'); // Rename to Usuario

const router = express.Router();
router.get('/usuario', async (req, res) => {
    const usuarios = await Usuario.findAll(); // Rename to usuarios
    res.send(usuarios);
});

router.get('/usuario/:usuarioId', async (req, res) => {
    const codigoUsuario = req.params.usuarioId; // Renamed for consistency
    res.json(await Usuario.findByPk(codigoUsuario)); // Rename to Usuario
});

router.post('/usuario', (req, res) => {
    Usuario.create({
        nome: req.body.nome,
        CPF: req.body.CPF,
        CNPJ: req.body.CNPJ,
        dataNascimento: req.body.dataNascimento,
        codEndereco: req.body.codEndereco,
        nivelPermissao: req.body.nivelPermissao
    }).then(() => {
        res.send('Usuário cadastrado com sucesso.'); // Corrected typo here as well
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/usuario/:usuarioId', (req, res) => {
    const codigoUsuario = req.params.usuarioId; // Renamed for consistency
    Usuario.update({
        nome: req.body.nome,
        CPF: req.body.CPF,
        CNPJ: req.body.CNPJ,
        dataNascimento: req.body.dataNascimento,
        codEndereco: req.body.codEndereco,
        nivelPermissao: req.body.nivelPermissao
    }, {
        where: {
            codusuario: codigoUsuario // Rename to codigoUsuario
        }
    }).then(() => {
        res.send('Usuário atualizado com sucesso.'); // Corrected typo here as well
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/usuario/:usuarioId', (req, res) => {
    const codigoUsuario = req.params.usuarioId; // Renamed for consistency
    Usuario.destroy({ where: { codusuario: codigoUsuario } }).then(() => {
        res.send('Usuário removido com sucesso.'); // Corrected typo here as well
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

module.exports = router;
