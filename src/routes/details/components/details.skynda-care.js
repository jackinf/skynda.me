import React from 'react';

import Skblock from './details.skblock';


import Keynotes from './../../home/components/Home.keypoints';

class Overview extends React.Component {
  render() {
    return (<Skblock header={'Skynda Care'}>
      <Keynotes />
    </Skblock>);
  }
}

export default Overview;
