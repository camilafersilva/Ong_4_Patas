const express = require('express');
const router = express.Router();
const { partners } = require('../models/index');


// Rota para criar um novo parceiro
router.post('/createPartnears', async (req, res) => {
    try {
        const { nome, email, telefone,mensagem } = req.body;
        await partners.create({ nome, email, telefone,mensagem });
        res.send('Partner salvo com sucesso');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Rota para obter todos os parceiros
router.get('/', async (req, res) => {
    try {
        const allPartners = await partners.findAll();
        res.json(allPartners);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
