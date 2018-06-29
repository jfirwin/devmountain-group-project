module.exports = function(app) {
  const express = require('express')
  const router = express.Router()

  router.post('/', (req, res) => {
    app.get('db').experience.create_experience({
      authid: req.session.passport.user.authid,
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      description: req.body.description,
      start_date: req.body.start_date,
      end_date: req.body.end_date
    })
      .then(response => {
        response[0].start_date = response[0].start_date.toISOString().split('T')[0]
        response[0].end_date = response[0].end_date.toISOString().split('T')[0]
        return res.status(200).send(response)
      })
      .catch(err => {
        console.log(err)
        return res.status(500).send('error')
      })
  })

  router.put('/', (req, res) => {
    app.get('db').experience.update_experience({
      authid: req.session.passport.user.authid,
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      description: req.body.description,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      id: req.body.id
    })
    .then(response => {
      response[0].start_date = response[0].start_date.toISOString().split('T')[0]
      response[0].end_date = response[0].end_date.toISOString().split('T')[0]
      return res.status(200).send(response)
    })
    .catch(err => {
      console.log(err)
      return res.status(500).send('error')
    })
  })

  router.delete('/', (req, res) => {
    app.get('db').experience.delete_experience({
      authid: req.session.passport.user.authid,
      id: req.body.id
    })
      .then(response => {
        let update = {
          id: req.body.id,
          response: response
        }
        return res.status(200).send(update)
      })
      .catch(err => {
        console.log(error)
        return res.status(500).send('error')
      })
  })
  return router
}
