/**
* Team.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    name:{
      type: 'string'
    },
    projects: {
      collection: 'project',
      via: 'teams'
    },
    pretending:{
      collection: 'project',
      via: 'pretenders'
    },
    members: {
      collection: 'user',
      via: 'teams'
    }
  }
};

