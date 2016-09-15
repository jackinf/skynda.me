import React from "react";
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './../details.css';

class Skblock extends React.Component {
  render() {
    return (<div className="row">
      <h4 className={s.blue_header}>{this.props.header}</h4>
      <div>{ this.props.children }</div>
    </div>);
  }
}

export default withStyles(s)(Skblock);
