module.exports = function(app) {
  const express = require('express')
  const router = express.Router()

  router.post('/', (req, res) => {
    app.get('db').education.create_education({
      authid: 'abc123',
      school: req.body.school,
      emphasis: req.body.emphasis,
      start_date: req.body.start_date,
      end_date: req.body.end_date
    })
      .then(response => {
        return res.status(200).send(response)
      })
      .catch(err => {
        console.log(err)
        return res.status(500).send('error')
      })
  })

  router.put('/', (req, res) => {
    console.log(req.body)
    app.get('db').education.update_education({
      authid: 'abc123',
      school: req.body.school,
      emphasis: req.body.emphasis,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      id: req.body.id
    })
    .then(response => {
      return res.status(200).send(response)
    })
    .catch(err => {
      console.log(err)
      return res.status(500).send('error')
    })
  })

  router.delete('/', (req, res) => {
    app.get('db').education.delete_education({
      authid: req.body.authid,
      id: req.body.id
    })
      .then(response => {
        return res.status(200).send(response)
      })
      .catch(err => {
        console.log(error)
        return res.status(500).send('error')
      })
  })
  return router
}
