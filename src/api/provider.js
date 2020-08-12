const express = require('express');
const mail = require('../services/mail');

const router = express.Router();

router.post('/request', async (req, res, next) => {
    const { school, provider } = req.body;

    if (!school) {
        res.status(400);
        const error = new Error('Required body parameter missing');
        error.code = 'missingParameter';
        next(error);
    } else {
        try {
            await mail.sendMail({
                subject: `Provider Request ${school.substr(0, 60)}`,
                text: `Spot Provider Request:\n\nProvider: ${provider}\n\nSchool: ${school}`,
                to: process.env.PROVIDER_REQUEST_RECEIVER
            });

            res.json({
                message: 'Provider request send'
            });
        } catch(error) {
            res.status(500);
            error.code = 'sendMailFailed';
            next(error);
        }
    }
});

module.exports = router;