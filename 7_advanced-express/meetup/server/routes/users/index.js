const express = require('express');
const UserModel = require('../../models/UserModel');
const passport = require('passport');
const middlewares = require('../middlewares');

const router = express.Router();

function redirectIfLoggedIn(req, res, next) {
  if (req.user) res.redirect('/users/account');
  return next();
}

module.exports = (params) => {
  const { avatars } = params;
  router.get('/login', redirectIfLoggedIn, (req, res) => res.render('users/login', { error: req.query.error }));
  router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login?error=true'
  }));

  router.get('/logout', (req, res) => {
    req.logout(req.user, err => {
      if(err) return next(err);
      res.redirect('/');
    });
  });

  router.get('/registration', redirectIfLoggedIn,(req, res) => res.render('users/registration', { success: req.query.success }));

  router.post('/registration',
  middlewares.upload.single('avatar'),
  middlewares.handleAvatar(avatars),
  async (req, res, next) => {
    try {
      const user = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });

      if(req.file && req.file.storedFilename) {
        user.avatar = req.file.storedFilename;
      }

      const savedUser = await user.save();
      if (savedUser) return res.redirect('/users/registration?success=true');
      return next(new Error('Failed to save user for unknown reasons.'));
    } catch (error) {
      if(req.file && req.file.storedFilename) {
        await avatars.delete(req.file.storedFilename);
      }
      return next(error);
    }
  });

  router.get('/account', (req, res, next) => {
    if(req.user) return next();
    return res.status(401).end();
  }, (req, res) => res.render('users/account', { user: req.user }));

  return router;
};
