/**
 * Created by zekar on 9/14/2016.
 */

import React from 'react';
import CarDetails from './CarDetails';

const title = 'Car details';

export default {

  path: '/car',

  action() {
    return {
      title,
      component: <CarDetails />,
    };
  },

};
