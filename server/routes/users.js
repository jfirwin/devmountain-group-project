module.exports = function(app) {
  const express = require('express')
  const router = express.Router()

  const skills = require('./skills.js')(app)
  const education = require('./education.js')(app)
  const theme = require('./theme.js')(app)

  router.use('/skills', skills)
  router.use('/education', education)
  router.use('/theme', theme)

  router.get(`/:username`, (req, res) => {
    app.get('db').users.get_user_details({username: req.params.username})
      .then(response => {
        return res.status(200).send(response)
      })
      .catch(err => {
        console.log('this is the error', err)
        res.status(500).send('there was an error')
      })
  })

  router.put(`/:username`, (res, req) => {
    app.get('db').users.update_user({
      username: req.params.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      description: req.body.description,
      imgurl: req.body.imgurl
    })
      .then(response => {
        return res.status(200).send(response)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send('there was an error')
      })
  })


  return router
}
