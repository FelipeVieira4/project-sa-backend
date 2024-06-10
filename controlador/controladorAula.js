const express = require('express');
const Aula = require('../modelo/modeloAulas');

const router = express.Router();
router.get('/aula', async (requisicao, resposta) => {
    const endereco = await Aula.findAll();
    resposta.send(endereco);
});

router.get('/aula/:aulaId', async (req, res) => {
    const codigoEndereco = req.params.aulaId;
    res.json(await Aula.findByPk(codigoEndereco));
});

router.post('/aula', (req, res) => {
    Aula.create({
        horario: req.body.horario,
        codProfessor: req.body.codProfessor,
        codMateria: req.body.codMateria
    }).then(() => {
        res.send('Endereco cadastrado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/aula/:aulaId', (req, res) => {
    const codigoEndereco = req.params.aulaId;
    Aula.update({
        horario: req.body.horario,
        codProfessor: req.body.codProfessor,
        codMateria: req.body.codMateria
    }, {
        where: {
            codEndereco: codigoEndereco
        }
    }).then(() => {
        res.send('Endereco atualizado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/aula/:aulaId', (req, res) => {
    const codigoEndereco = req.params.codigoEndereco;
    Aula.destroy({ where: { codEndereco: codigoEndereco } }).then(() => {
        res.send('Endereco removido com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

module.exports = router;