/**
 * Created by jevgenir on 17/09/2016.
 */
import React from 'react';
import Simple from './Simple';

const title = 'Simple';

export default {

  path: '/simple',

  action() {
    return {
      title,
      component: <Simple title={title} />,
    };
  },

};
