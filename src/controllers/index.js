const express = require('express');
const router = express.Router();

const home = require('./home');
const error = require('./error');
const tarot = require('./tarot');
const newtarot = require('./newtarot');

router.get('/', home.get);
router.get('/tarot', tarot.tarot);
router.get('/newtarot', newtarot.newtarot);
router.post('/newtarot', newtarot.newtarotpost)
router.use(error.client);
router.use(error.server);



module.exports = router;
