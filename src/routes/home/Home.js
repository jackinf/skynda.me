/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import heroImageUrl from './../../public/images/standard/hero-01-2.jpg';
console.log(heroImageUrl);

function Home({ news }) {
  return (
    <div>
      {/* Main jumbotron for a primary marketing message or call to action */}
      <div className={s.sk_hero}>
        <img className={s.sk_hero__image} src={heroImageUrl} alt="image" />
          <div className={s.sk_hero__text}>
            <div className="container">
              <div className="grid">
                <div className="col-md-9">
                  <h2>Buying a pre-used car has never been so fun, easy and secure</h2>
                </div>
                <div className="col-md-3">
                  <a className="btn btn-primary read_more_button" href="#" role="button">Read More</a> {/* styleName="margin-top:20px;"  */}
                </div>
              </div>
            </div>
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
