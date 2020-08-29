const express = require('express');
const { searchSchools } = require('../services/search');

const router = express.Router();

router.get('/search', async (req, res, next) => {
    const { q } = req.query;

    if (!q) {
        res.status(400);
        const error = new Error('Required q query parameter missing');
        error.code = 'missingParameter';
        next(error);
    } else {
        const data = await searchSchools(q);

        res.json({
            size: data.length,
            data
        });
    };
});

module.exports = router;