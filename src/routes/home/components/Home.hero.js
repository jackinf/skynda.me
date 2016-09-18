/**
 * Created by jevgenir on 18/09/2016.
 */

import React from 'react';
import withStyle from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.hero.css';

import RaisedButton from 'material-ui/RaisedButton';

import heroImageUrl from './../../../public/images/standard/hero-01-2.jpg';

/**
 * Main jumbotron for a primary marketing message or call to action
 */
class Hero extends React.Component {
  render() {
    return (<div className={s.sk_hero}>
      <img className={s.sk_hero__image} src={heroImageUrl} alt="image"/>
      <div className={s.sk_hero__text}>
        <div className="container">
          <div className={s.grid}>
            <div className="col-md-9">
              <h2>Buying a pre-used car has never been so fun, easy and secure</h2>
            </div>
            <div className="col-md-3">
              <RaisedButton label="Read more" href="details" backgroundColor="#019BFF" labelColor="whitesmoke"  />
            </div>
          </div>
        </div>
      </div>

    </div>)
  }
}

export default withStyle(s)(Hero);
