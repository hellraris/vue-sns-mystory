const passport = require('passport');
const bcrypt = require('bcrypt');
const { Strategy: LocalStrategy } = require('passport-local');
const db = require('../models');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, async (email, password, done) => {
    try {
      const exUser = await db.User.findOne({ where: { email }});
      if (!exUser) {
        return done(null, false, { reason: '存在しないユーザーです。' });
      }
      const result = await bcrypt.compare(password, exUser.password);
      if (result) {
        return done(null, exUser);
      } else {
        return done(null, false, { reason: 'パスワードが不正です。'});
      } 
    } catch (err) {
      console.error(err);
      return done(err);
    }
  }));
}