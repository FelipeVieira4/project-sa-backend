const express = require('express');
const bodyParser = require('body-parser');
const Turma = require('../modelos/modeloTurma');
const Usuario = require('../modelos/modeloUsuario');
const Sala = require('../modelos/modeloSala');

const router = express.Router();
const jsonParser = bodyParser.json();

// Create - Criar uma nova Turma
router.post('/turmas', jsonParser, async (req, res) => {
    try {
        const { nomeTurma, codProfessor, codSala } = req.body;
        const turma = await Turma.create({ nomeTurma, codProfessor, codSala });
        res.status(201).json(turma);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Read - Obter todas as Turmas
router.get('/turmas', async (req, res) => {
    try {
        const turmas = await Turma.findAll({
            include: [
                { model: Usuario, as: 'professor' },
                { model: Sala, as: 'sala' }
            ]
        });
        res.status(200).json(turmas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Read - Obter uma Turma pelo ID
router.get('/turmas/:id', async (req, res) => {
    try {
        const turma = await Turma.findByPk(req.params.id, {
            include: [
                { model: Usuario, as: 'professor' },
                { model: Sala, as: 'sala' }
            ]
        });
        if (turma) {
            res.status(200).json(turma);
        } else {
            res.status(404).json({ error: 'Turma não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update - Atualizar uma Turma
router.put('/turmas/:id', jsonParser, async (req, res) => {
    try {
        const { nomeTurma, codProfessor, codSala } = req.body;
        const turma = await Turma.findByPk(req.params.id);
        if (turma) {
            await turma.update({ nomeTurma, codProfessor, codSala });
            res.status(200).json(turma);
        } else {
            res.status(404).json({ error: 'Turma não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete - Deletar uma Turma
router.delete('/turmas/:id', async (req, res) => {
    try {
        const turma = await Turma.findByPk(req.params.id);
        if (turma) {
            await turma.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Turma não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});