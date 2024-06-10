const express = require('express');
const Materia = require('../modelo/modeloMateria');

const router = express.Router();
router.get('/materia', async (req, res) => {
    const materia = await Materia.findAll();
    res.send(materia);
});

router.get('/materia/:materiaId', async (req, res) => {
    const codigoMateria = req.params.materiaId;
    res.json(await Materia.findByPk(codigoMateria));
});

router.post('/materia', (req, res) => {
    Materia.create({
        codMateria: req.body.codMateria,
        nome: req.body.nome,
        descricao: req.body.descricao,
    }).then(() => {
        res.send('Materia cadastrado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/materia/:materiaId', (req, res) => {
    const codigoMateria = req.params.materiaId;
    Materia.update({
        codMateria: req.body.codMateria,
        nome: req.body.nome,
        descricao: req.body.descricao,
    }, {
        where: {
            codMateria: codigoMateria
        }
    }).then(() => {
        res.send('Materia atualizado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/materia/:materiaId', (req, res) => {
    const codigoMateria = req.params.materiaId;
    Materia.destroy({ where: { codMateria: codigoMateria } }).then(() => {
        res.send('Materia removido com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

module.exports = router;