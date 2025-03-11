const express = require('express');
const rateController = require('../controllers/RateController');

const router = express.Router();

router.get('/', rateController.getAllRates);

router.get('/:id', rateController.getRateById);

router.post('/', rateController.createRate);

router.put('/:id', rateController.updateRate);

router.delete('/:id', rateController.deleteRate);

module.exports = router;
