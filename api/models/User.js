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
    name: {
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
    }
  }

};

