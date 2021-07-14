var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('some inputs up in here');
});

router.post('/', function (req, res) {
  res.send('POST req to home page')
})

//POST movie
// router.post('/', (request, response) => {
//   movies.push(request.body)
//   response.status(201).send(request.body)
// })

module.exports = router;
