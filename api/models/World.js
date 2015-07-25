/**
* World.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    rules:{
      type: 'string'
    },
    master:{
      model: 'user'
    },
    board :{
      model: 'board'
    },
    moderators :{
      collection: 'user',
      via: 'moderatingWorld'
    }
  }
};

