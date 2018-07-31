
const path = require('path')
require('dotenv').config({path: path.join(__dirname,'.env')})
const express = require('express')
const app = express()
const dbConnection = require('./config/db.js')(app)
const middleware = require('./config/middleware.js')(app)
const routes = require('./routes/router.js')(app)
const authenthication = require('./routes/Authenthication')(app)
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')


app.use('/auth', authenthication)
app.use('/api', routes)

app.use( express.static( `${__dirname}/../front-end/build` ));


const port = 3005
app.listen(port, () =>{
  console.log(`listening on port ${port}`)
})
