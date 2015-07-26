/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  schema: true,

  attributes: {
    username: {
      type: 'string',
      unique: true
    },
    email: {
      type: 'email',
      unique: true
    },
    photoUrl: {
      type: 'string'
    },
    passports: {
      collection: 'Passport',
      via: 'user'
    },
    role: {
      type: 'string',
      enum: ['person', 'business']
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    identification: {
      type: 'string'
    },
    rank: {
      type: 'integer'
    },
    teams: {
      collection: 'team',
      via: 'members'
    },
    clubs: {
      collection: 'club',
      via: 'members'
    },
    masteringClubs: {
      collection: 'club',
      via: 'master'
    },
    guild: {
      model: 'guild'
    },
    masteringGuild: {
      model: 'guild'
    },
    moderatingGuild: {
      model: 'guild'
    },
    moderatingWorld: {
      model: 'world'
    }
  }

};

