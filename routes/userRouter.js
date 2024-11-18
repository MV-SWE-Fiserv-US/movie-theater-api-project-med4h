const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { User, Show } = require('../models');

router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

router.get('/:id', async (req,res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user);
});

router.get("/:id/shows", async (req, res) => {
    const user = await User.findByPk(req.params.id, {
        include: Show
    });
    res.json(user);
});

//router.put('/id/shows/:showId', async (req, res) => {
