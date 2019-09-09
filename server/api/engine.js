const express = require('express')
const router = express.Router()
const P = require('../../mysql/index')
const engine = require('../engine')


router.post('/home/engine/section', (req, res) => {
  let data = JSON.parse(req.body.tableData);
  console.log(data);
  let recommendTeacher = engine.engine(data);
  res.send(recommendTeacher)
})


module.exports = router
