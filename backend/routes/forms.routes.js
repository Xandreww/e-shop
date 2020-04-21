const express = require('express');
const router = express.Router();

const FormController = require('../controllers/forms.controller');

router.get('/forms', FormController.getForms);
router.get('/forms/:id', FormController.getId);

module.exports = router;
