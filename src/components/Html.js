import React, { PropTypes } from 'react';
import { analytics } from '../config';


function Html({ title, description, style, script, children }) {
  return (
    <html className="no-js" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        {style && <style id="css" dangerouslySetInnerHTML={{ __html: style }} />}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.4/css/bootstrap.min.css"/>
        {/*<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"/>   */}
        <style id="css1" dangerouslySetInnerHTML={{ __html: `
        [type=button]{
          -webkit-appearance: none !important;  /* Material-UI button fix*/
        }
        body {
            font-family: 'Open Sans', sans-serif;
          font-size: 15px;
          line-height: 1.50;
        }
        ` }}/>
      </head>
      <body>
        <div id="app" >
          <div dangerouslySetInnerHTML={{ __html: children }} />
        </div>
        {script && <script src={script} />}
        {analytics.google.trackingId &&
          <script
            dangerouslySetInnerHTML={{ __html:
            'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
            `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')` }}
          />
        }
        {analytics.google.trackingId &&
          <script src="analytics.js" async defer />
        }
      </body>
    </html>
  );
}

Html.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  style: PropTypes.string,
  script: PropTypes.string,
  children: PropTypes.string,
};

Html.defaultProps = {
  title: '',
  description: '',
};

export default Html;
