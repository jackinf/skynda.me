/**
 * Created by jevgenir on 17/09/2016.
 */

import React from 'react';
import InfoImage from './../InfoImage/InfoImage';

export default class ImageGrid extends React.Component {
  render() {
    return (<section className="row" ng-repeat="row in $ctrl.rows">
        <div className="col-md-4" ng-repeat="value in row">
          <InfoImage src="" href="" />
          {/*<info-image src="value.src" href="value.href">*/}
            {/*<h5 style="color:white;">&nbsp;&nbsp;{{value.title}}</h5>*/}
            {/*<p>{{value.description}}</p>*/}
          {/*</info-image>*/}
        </div>
      </section>)
  }
}
