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

import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';



import ImageGrid from '../../components/ImageGrid/ImageGrid';
import image_testcar from '../../public/images/cars/accord/accord.jpg';

import Hero from './components/Home.hero';
import Keypoints from './components/Home.keypoints';

// List of rows
const cars = [[
  {src: image_testcar, href: '/details', title: 'one', description: 'awesome car'},
  {src: image_testcar, href: '/details', title: 'two', description: 'awesome car'},
  {src: image_testcar, href: '/details', title: 'three', description: 'awesome car'},
  {src: image_testcar, href: '/details', title: 'four', description: 'awesome car'},
  {src: image_testcar, href: '/details', title: 'five', description: 'awesome car'},
  {src: image_testcar, href: '/details', title: 'six', description: 'awesome car'}
]];

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



function Home({news}) {
  return (
    <div>

      <Hero />
      <br />

      <div className="container">

        <Keypoints />

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
              <h2 className={`${s["primary-header"]} ${s["text-center"]}`}>Recently Added</h2>
            </div>

            <br />

            <div className="row">
              <div className="col-md-12">
                <ImageGrid rows={cars}/>
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
