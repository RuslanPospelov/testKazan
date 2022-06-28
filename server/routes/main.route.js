const router = require('express').Router();
const convert = require('../converter');

router.route('/')
  .post((req, res) => {
    const html = convert(req.body);
    res.send(html);
  });

module.exports = router;
