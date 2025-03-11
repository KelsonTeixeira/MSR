const express = require('express');
const titleController = require('../controllers/TitleController');

const router = express.Router();

router.get('/', titleController.getAllTitles);

router.get('/:id', titleController.getTitleById);

router.post('/', titleController.createTitle);

router.put('/:id', titleController.updateTitle);

router.delete('/:id', titleController.deleteTitle);

module.exports = router;
