/**
 * Created by jevgenir on 17/09/2016.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './InfoImage.css';

class InfoImage extends React.Component {
  render() {
    return (<div className="info-image">
      <a href={this.props.href}>
        <img src={this.props.src} className={s["info-image__image"]} />
      </a>

      <div className="info-image__info-panel-bg">
      </div>

      <div className="info-image__info-panel">
        {...this.props.children}
        {/*<ng-transclude></ng-transclude>*/}
      </div>
    </div>);
  }
}

export default withStyles(s)(InfoImage);
