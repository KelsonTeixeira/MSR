const express = require('express');

const userRoutes = require('./UserRoutes');
const rateRoutes = require('./RateRoutes');
const titleRoutes = require('./TitleRoutes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/titles', titleRoutes);
router.use('/rates', rateRoutes);

module.exports = router;
