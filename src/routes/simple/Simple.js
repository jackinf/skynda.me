/**
 * Created by jevgenir on 17/09/2016.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Simple.scss';
import s1 from './Test.css';

class Simple extends React.Component {
  render() {
    return (<div id={s.sidebar}>Simple</div>);
  }
}

export default withStyles(s)(Simple);
