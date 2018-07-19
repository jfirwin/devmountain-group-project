module.exports = function(app) {
  const express = require('express')
  const router = express.Router()

  const skills = require('./skills.js')(app)
  const education = require('./education.js')(app)
  const experience = require('./experience.js')(app)
  const theme = require('./theme.js')(app)

  router.use('/skills', skills)
  router.use('/education', education)
  router.use('/experience', experience)
  router.use('/theme', theme)

  router.get(`/:username`, (req, res) => {
    app.get('db').users.get_user_details({username: req.params.username})
      .then(response => {
        return res.status(200).send(response)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send('there was an error')
      })
  })

  router.put(`/`, (req, res) => {
    app.get('db').users.update_user({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      description: req.body.description,
      imgurl: req.body.imgurl,
      theme: req.body.theme,
      authid: req.session.passport.user.authid
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
