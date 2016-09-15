import React from 'react';

import Skblock from './details.skblock';
import s from './../details.css';

import image_ok from './../../../public/images/standard/ok.png';
import image_happy from './../../../public/images/standard/happy.png';
import image_cancel from './../../../public/images/standard/cancel.png';

class Overview extends React.Component {
  render() {
    return ( <Skblock header={'Our Certified Inspector\'s Report'}>
      <div > {/*style="margin-left: 30px"*/  }
        <div className="row">
          <div className="col col-md-4"><label className={s.sk_details__certified_developer}>Mr. Happy</label></div>
          <div className="col col-md-3"><img src={image_happy} width="130" alt="happy" /></div>
          <div className="col col-md-5">
            {/*<button className="btn btn-default sk_details__certified_have_a_question">Have a question?</button>*/}
            {/*<button className={Object.assign("btn", "btn-default", s.sk_details__certified_have_a_question)}>Have a question?</button>*/}
          </div>
        </div>
        <div className="row">
          <h4>Category 1</h4>
          <div className="row">
            <div className="col col-md-6"> {/*style="padding: 5px 0;"*/}
              <img src={image_ok} width="24" className={s.sk_details__icon_list_image}/>
              Automatic transmission flawless in cold temperature
            </div>
            <div className="col col-md-6"> {/*style="padding: 5px 0;"*/}
              <img src={image_ok} width="24" className={s.sk_details__icon_list_image}/>
              Steering wheel centered
            </div>
          </div>

          <div className="row">
            <div className="col col-md-6"> {/*style="padding: 5px 0;"*/}
              <img src={image_ok} width="24" className={s.sk_details__icon_list_image}/>
              Steering wheel centered
            </div>
            <div className="col col-md-6"> {/*style="padding: 5px 0;"*/}
              <img src={image_cancel} width="24" className={s.sk_details__icon_list_image}/>
              Automatic transmission flawless in cold temperature
            </div>
          </div>

          <div className="row">
            <div className="col col-md-6"> {/*style="padding: 5px 0;"*/}
              <img src={image_ok} width="24" className={s.sk_details__icon_list_image}/>
              Automatic transmission flawless in cold temperature
            </div>
            <div className="col col-md-6"> {/*style="padding: 5px 0;"*/}
              <img src={image_ok} width="24" className={s.sk_details__icon_list_image}/>
              Steering wheel centered
            </div>
          </div>

          <div className="row">
            <div className="col col-md-11">
              <button className="btn btn-white pull-right">Show all</button>
            </div>
          </div>

        </div>
      </div>
    </Skblock>);
  }
}

export default Overview;
