const express = require('express');
const Escola = require('../modelo/modeloEscola');

const router = express.Router();
router.get('/escola', async (req, res) => {
    const escola = await Escola.findAll();
    res.send(escola);
});

router.get('/escola/:escolaId', async (req, res) => {
    const codigoEscola = req.params.escolaId;
    res.json(await Escola.findByPk(codigoEscola));
});

router.post('/escola', (req, res) => {
    Escola.create({
        codEscola: req.body.codEscola,
        nome: req.body.nome,
        email: req.body.email,
        CEP: req.body.CEP,
        telefone: req.body.telefone,
        codEndereco: req.body.codEndereco
    }).then(() => {
        res.send('Escola cadastrado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/escola/:escolaId', (req, res) => {
    const codigoEscola = req.params.escolaId;
    Escola.update({
        codEscola: req.body.codEscola,
        nome: req.body.nome,
        email: req.body.email,
        CEP: req.body.CEP,
        telefone: req.body.telefone,
        codEndereco: req.body.codEndereco
    }, {
        where: {
            codEscola: codigoEscola
        }
    }).then(() => {
        res.send('Escola atualizado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/escola/:escolaId', (req, res) => {
    const codigoEscola = req.params.escolaId;
    Escola.destroy({ where: { codEscola: codigoEscola } }).then(() => {
        res.send('Escola removido com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

module.exports = router;