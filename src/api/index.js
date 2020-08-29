const express = require('express');

const provider = require('./provider');
const school = require('./school');

const router = express.Router();

router.use('/provider', provider);
router.use('/school', school);

module.exports = router;
