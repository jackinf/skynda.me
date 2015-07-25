/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    role : {
      type: 'string',
      enum: ['person', 'business']
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    userName: {
      type: 'string'
    },
    email: {
      type: 'email'
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
      model:'guild'
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

