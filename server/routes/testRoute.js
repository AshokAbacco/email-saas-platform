const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ message: 'Backend API is connected ✅' });
});

module.exports = router;
