// include
const express = require('express');
const router = express.Router()

// default page
router.get('/', (req, res) => {
    res.send('Hello Worlds?!')
})

// set up router
module.exports = router;
