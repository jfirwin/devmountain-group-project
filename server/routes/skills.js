module.exports = function(app) {
  const express = require('express')
  const router = express.Router()

  router.post('/', (req, res) => {
    app.get('db').skills.create_skill({
      authid: req.body.authid,
      skill: req.body.skill,
      lvl: req.body.lvl
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
    app.get('db').skills.update_skill({
      skill: req.body.skill,
      lvl: req.body.lvl,
      authid: 'abc123',
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
    app.get('db').skills.delete_skill({authid: req.body.authid, id: req.body.id})
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
