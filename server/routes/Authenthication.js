module.exports = function(app) {
  require('dotenv').config()
  const express = require('express')
  const router = express.Router()
  const passport = require('passport')
  const Auth0Strategy = require('passport-auth0')
  const cookieParser = require('cookie-parser')
  const session = require('express-session')

  app.use(cookieParser(process.env.SESSION_SECRET))
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  }));

  passport.use(new Auth0Strategy({
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL,
    scope: 'openid'
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      app.get('db').users.get_user_session({authid: profile.id})
        .then(user => {
          if(user[0]) {
            done(null, {authid: profile.id})
          } else {
            app.get('db').users.create_user({authid: profile.id})
              .then(user => {
                done(null, {authid: profile.id})
              })
          }
        })
  }))

  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser(function(user, done){
    done(null, user);
  })

  passport.deserializeUser(function(user, done){
    done(null, user);
  })

  router.get('/login',
    passport.authenticate('auth0', {
      clientID: process.env.AUTH0_CLIENT_ID,
      domain: process.env.AUTH0_DOMAIN,
      redirectUri: process.env.AUTH0_CALLBACK_URL,
      scope: 'openid'
    }),
    (req, res) => {
      res.redirect('/edit')
    }
)
  router.get('/callback', passport.authenticate('auth0', {
    failureRedirect: process.env.AUTH0_FAILURE_URL
  }),
  function(req, res) {
    if(!req.user) {
      throw new Error('user null')
    }
    res.redirect(process.env.AUTH0_SUCCESS_URL)
  }
)
  router.get(
    '/me',
    function(req, res){
      app.get('db').users.get_user_session(req.user).then(
        response => {
          if(response.length > 0){
            res.status(200).send(response)
          }
          else{
            res.status(401).send('unauthorized')
          }
    })})

  router.get('/userEdit', (req, res) => {
    app.get('db').users.get_user_edit({authid: req.session.passport.user.authid})
      .then(response => {
        return res.status(200).send(response)
      })
  })

  return router
  }
