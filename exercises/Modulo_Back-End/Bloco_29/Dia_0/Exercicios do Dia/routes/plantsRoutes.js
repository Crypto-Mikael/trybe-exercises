const express = require('express');

const router = express.Router();

const plantsControllers = require('../controllers/plantsController');

router.get('/plants', plantsControllers.findAllPlants);
router.get('/plant/:id', plantsControllers.findById);
router.delete('/plant/:id', plantsControllers.deleteById);
router.put('/plant/:id', plantsControllers.updateById);
router.post('/plant', plantsControllers.create);
router.get('/sunny/:id', plantsControllers.findNeedsSun);

module.exports = router;
