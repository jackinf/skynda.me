/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import heroImageUrl from './../../public/images/standard/hero-01-2.jpg';

import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';

import image_ok from './../../public/images/standard/ok@2x.png';
import image_clock from './../../public/images/standard/clock@2x.png';
import image_happy from './../../public/images/standard/happy@2x.png';

// Replace with car marks
const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

class Keypoint extends React.Component {
  render() {
    return (<div className={`${s.sk_keypoint} ${s.text_center}`}>
      <img className={s.sk_keypoint__image} src={this.props.src} alt=""/>
      <h2 className={s.blue_header}>{this.props.title}</h2>
      <p>{this.props.content}</p>
    </div>);
  }
}

function Home({news}) {
  return (
    <div>
      {/* Main jumbotron for a primary marketing message or call to action */}
      <div className={s.sk_hero}>
        <img className={s.sk_hero__image} src={heroImageUrl} alt="image"/>
        <div className={s.sk_hero__text}>
          <div className="container">
            <div className="grid">
              <div className="col-md-9">
                <h2>Buying a pre-used car has never been so fun, easy and secure</h2>
              </div>
              <div className="col-md-3">
                <RaisedButton label="Go to car details..." href="details"/>
                {/*<a className="btn btn-primary read_more_button" href="#" role="button">Read More</a> /!* styleName="margin-top:20px;"  *!/*/}
              </div>
            </div>
          </div>
        </div>

      </div>

      <br />

      <div className="container">
        <div className="row">
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
        </div>

        <div className="row">
          <div className="col-sx-12">
            <h2 className="blue-header text-center">Search</h2>
          </div>

          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className={`input-group ${s.sk_search}`}>
                <AutoComplete
                  floatingLabelText="Search..."
                  filter={AutoComplete.caseInsensitiveFilter}
                  dataSource={colors}
                />
                {/*<input type="text" className="form-control" ng-model="searchTerm" placeholder="Enter a Car Name"*/}
                {/*uib-typeahead="carname for carname in carnames | filter:$viewValue | limitTo:8" />*/}
                <span className="input-group-btn">
                <RaisedButton label={'GO'} />
            </span>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          {/*<h2 ng-show="cars.found.length > 0">*/}
          {/*Total found: {{cars.found.length}}*/}
          {/*</h2>*/}
          {/*<image-grid ng-if="cars.found.length > 0" values="cars.found"></image-grid>*/}
        </div>

        {/*<div className="row" ng-show="cars.found.length > 0">*/}
        {/*<button className="btn btn-white pull-right" ng-click="showAdvancedSearch()">Show advanced search</button>*/}
        {/*</div>*/}

        <br />

        <div className="row">
          <div className="row">
            <div className="col-sx-12">
              <h2 className="blue-header text-center">Recently Added</h2>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  {/*<image-grid ng-if="cars.recent.length > 0" values="cars.recent"></image-grid>*/}
                </div>
              </div>
            </div>
          </div>

          <br />

          {/*<footer>*/}
          {/*<p className="text-center">Skynda AS Valge 16, Tallinn 19095 Estonia <a href="mailto:hello@skynda.me">hello@skynda.me</a></p>*/}
          {/*<div className="fb-like" data-href="https://www.facebook.com/Skynda-1197076750314307/?fref=ts" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>*/}
          {/*</footer>*/}
        </div>
      </div>

    </div>
  );
}

Home.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string,
  })).isRequired,
};

export default withStyles(s)(Home);
