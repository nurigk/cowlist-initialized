const controller = require('./controller');
const router = require('express').Router();

router.get('/api/cows', controller.cows.get);
router.post('/api/cows', controller.cows.post);

module.exports = router;