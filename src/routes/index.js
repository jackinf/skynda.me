/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../components/App';

// Child routes
import home from './home';
import login from './login';
import register from './register';
import content from './content';
import notFound from './notFound';
import carDetails from './details';


class Wrapper extends React.Component {
  render() {
    return (<MuiThemeProvider>
      <div>
        <App context={this.props.context}>{this.props.route.component}</App>
      </div>
    </MuiThemeProvider>);
  }
}

export default {

  path: '/',

  // keep in mind, routes are evaluated in order
  children: [
    home,
    login,
    register,
    carDetails,

    // place new routes before...
    content,
    notFound,
  ],

  async action({ next, context }) {
    let route;

    // Execute each child route until one of them return the result
    // TODO: move this logic to the `next` function
    do {
      route = await next();
    } while (!route);

    return {
      ...route,

      // Override the result of child route with extensions
      title: `${route.title || 'Untitled Page'} - www.reactstarterkit.com`,
      description: route.description || '',

      /*
       We need to wrap the entire application with MuiThemeProvider in order for all material-ui components to work.
       See https://www.npmjs.com/package/material-ui
       */
      component: <Wrapper context={context} route={route} />,
    };
  },

};
