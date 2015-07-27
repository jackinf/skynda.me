/**
 * Passport configuration
 *
 * This is the configuration for your Passport.js setup and where you
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

module.exports.passport = {
  local: {
    strategy: require('passport-local').Strategy
  },
  facebook: {
    name: 'Facebook',
    protocol: 'oauth2',
    strategy: require('passport-facebook').Strategy,
    options: {
      clientID: '820794971374546',
      clientSecret: 'ed16c1bd204f803dc2df8da3ce6c58bb',
      scope: ['email'] /* email is necessary for login behavior */
    }
  },

  google: {
    scope: ['email'],
    name: 'Google',
    protocol: 'oauth2',
    strategy: require('passport-google-oauth').OAuth2Strategy,
    options: {
      clientID: '1052590938688-o0idr1ujb1sh3ml4uki7msrmkglt92n7.apps.googleusercontent.com',
      clientSecret: 'Rt29-0JFFDrmpYxpa9Dy0Q2c'
    }
  }
};
