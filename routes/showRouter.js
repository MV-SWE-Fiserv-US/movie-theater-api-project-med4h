const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { Show, User } = require('../models');

router.get('/', async (req, res) => {
    const shows = await Show.findAll();
    res.json(shows);
});

router.get('/:id', async (req,res) => {
    const show = await Show.findByPk(req.params.id);
    res.json(show);
});

router.get("/:id/users", async (req, res) => {
    const show = await Show.findByPk(req.params.id, {
        include: User
    });
    res.json(show);
});

