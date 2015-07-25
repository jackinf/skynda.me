/**
* Project.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title :{
      type: 'string'
    },
    description :{
      type: 'string'
    },
    goal :{
      type: 'string'
    },
    status:{
      type: 'string',
      enum: ['created', 'published', 'taken', 'inDevelopment','closed'],
      defaultsTo: 'created'
    },
    problem:{
      type: 'string'
    },
    steps:{
      type: 'string'
    },
    board: {
      collection: 'board',
      via: 'projects'
    },
    pretender:{
      collection: 'team',
      via: 'projects'
    },
    teams: {
      collection: 'team',
      via: 'projects'
    }
  }
};

