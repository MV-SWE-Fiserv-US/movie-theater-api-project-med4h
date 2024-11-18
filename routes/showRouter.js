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

router.get("/:id/:userId", async (req, res) => {
    const show = await Show.findByPk(req.params.id, {
        include: User
    });
    res.json(show);
});

router.put('/:id', async (req, res) => {
    const show = await Show.findByPk(req.params.id);
    show.available = req.body.available;
    await show.save();
    res.json(show);
});

router.delete('/:id', async (req, res) => {
    const show = await Show.findByPk(req.params.id);
    await show.destroy();
});

// router.get('/', async (req, res) => {
//     const shows = await Show.findAll({
//         where: {
//             genre: req.query.genre
//         }
//     });
//     res.json(shows);
// });

module.exports = router;