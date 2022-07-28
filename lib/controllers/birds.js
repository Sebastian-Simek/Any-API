const { Router } = require('express');
const Bird = require('../models/Bird');
const router = Router();

router
  .get('/', async (req, res) => {
    const birds = await Bird.getAll();
    const idAndName = birds.map((bird) => ({ id: bird.id, name: bird.name }));
    res.json(idAndName);
  });

module.exports = router;
