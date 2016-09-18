import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.keypoints.css';

import image_ok from './../../../public/images/standard/ok@2x.png';
import image_clock from './../../../public/images/standard/clock@2x.png';
import image_happy from './../../../public/images/standard/happy@2x.png';

class Keypoint extends React.Component {
  render() {
    return (<div className={`${s["text-center"]}`}>
      <img className={s.sk_keypoint__image} src={this.props.src} alt=""/>
      <h2 className={s["keypoint-header"]}>{this.props.title}</h2>
      <p>{this.props.content}</p>
    </div>);
  }
}

class Keypoints extends React.Component {
  render() {
    return (<div className="row">
      <div className="col-md-4">
        <Keypoint
          title="Certified Inspections"
          content="All our cars have been certified by our inspectors. Every car comes with a detailed report."
          src={image_ok}>
        </Keypoint>
      </div>
      <div className="col-md-4">
        <Keypoint
          title="Fast Delivery"
          content="We deliver your car in 3 days to which every location you choose."
          src={image_clock}>
        </Keypoint>
      </div>
      <div className="col-md-4">
        <Keypoint
          title="7 Day Returns"
          content="If you do not find the car suitable you can return in 7 days, no questions asked."
          src={image_happy}>
        </Keypoint>
      </div>
    </div>);

  }
}

export default withStyles(s)(Keypoints);
