var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile')['development']);

router.get('/', function (req, res) {
  knex
    .select('*')
    .from('inputs')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The droids you are looking for could not be found. Please try again'
      })
    );
  console.log(`GET submitted`)
})

router.post('/', function (req, res) {
  // res.send('WE POSTED IN HERE')
  console.log(`POST body: `, req.body)
  knex('inputs')
    .insert({title: req.body.title})
    .then(inputs => res.status(200).json(inputs))
    .catch(err =>
      res.status(404).json({
        message:
          'The droids you are looking for could not be found. Please try again'
      })
    );
})



// fetch(`http://tle.ivanstanojevic.me/api/tle/${norad_id}`)
// .then(data => data.json())
// .then(json => {
//     console.log("JSON", json)
//     if(json.satelliteId) {
//         knex('tles')
//             .insert({
//                 norad_id: norad_id,
//                 name: json.name,
//                 line1: json.line1,
//                 line2: json.line2,
//                 created_at: 'NOW()',
//                 updated_at: 'NOW()',
//                 keep_updated: true
//             })


module.exports = router;
