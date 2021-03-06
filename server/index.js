const path = require('path')
require('dotenv').config({path: path.join(__dirname, '.env')})
const express = require('express')
const app = express()
require('./config/db.js')(app)
require('./config/middleware.js')(app)
const routes = require('./routes/router.js')(app)
const authentication = require('./routes/Authentication')(app)

app.use('/auth', authentication)
app.use('/api', routes)

app.use( express.static( `${__dirname}/../front-end/build` ));

const port = 3005
app.listen(port, () =>{
  console.log(`listening on port ${port}`)
})
