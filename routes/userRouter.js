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

router.put(
'/:id/shows/:showId', async (req, res) => {
    const { id, showId } = req.params;
    const user = await User.findByPk(id);
    const show = await Show.findByPk(showId);

    if (user && show) {
        await user.addShow(show);
        res.status(200).json({ message: 'Show associated with user successfully' });
    } else {
        res.status(404).json({ error: 'User or Show not found' });
    }
})

module.exports = router;