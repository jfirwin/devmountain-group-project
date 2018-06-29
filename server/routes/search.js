module.exports = function(app) {
  const express = require('express')
  const router = express.Router()

  router.get(`/tiles`, (req, res) => {
    app.get('db').search.get_users_search()
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
