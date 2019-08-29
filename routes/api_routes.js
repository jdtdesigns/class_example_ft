const router = require('express').Router();

// localhost:5000/api/test
router.get('/test', (req, res) => {
  res.send(['apple', 'grape', 'kiwi', 'orange']);
});

module.exports = router;


// module.exports = function(app) {

// }