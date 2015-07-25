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
      enum: ['person', 'bussiness']
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
    guild: {
      model:'guild'
    },
    clubs: {
      collection: 'club',
      via: 'members'
    },
    teams: {
      collection: 'teams',
      via: 'members'
    },
    masteringGuild: {
      model: 'guild'
    },
    masteringClubs: {
      collection: 'club',
      via: 'master'
    },
    moderatingGuild: {
      model: 'guild'
    },
    moderatingWorld: {
      model: 'world'
    }

  }
};

