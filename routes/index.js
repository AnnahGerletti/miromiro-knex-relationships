var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/profiles/:id', (req, res) => {
  db.getUser(Number(req.params.id), req.app.get('connection'))
    .then((profile) => {
      res.render('singleUser', profile)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/form', (req, res) => {
  const viewData = {}
  db.makeUser(req.app.get('connection'))
    .then(result => {
      viewData.users = result[0]
      viewData.profiles = result[1]
      res.render('form', viewData)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/form', (req, res) => {
  res.redirect('/')
})

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
