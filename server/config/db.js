const massive = require('massive')

module.exports = function(app) {
  const connection = massive(process.env.CONNECTION_STRING)
    .then(db => {
      console.log('db set up!')
      app.set('db', db)
    })
    .catch(error => console.log(error))
    return connection
}
