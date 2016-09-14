/**
 * Created by zekar on 9/14/2016.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CarDetails.css';

import image_ok from './../../public/images/standard/ok.png';
import image_diploma_1 from './../../public/images/standard/diploma_1.png';
import image_gas_station_2x from './../../public/images/standard/gas_station@2x.png';
import image_star_2x from './../../public/images/standard/star@2x.png';
import image_star from './../../public/images/standard/star.png';
import image_unstar from './../../public/images/standard/star-1.png';
import image_group_124 from './../../public/images/standard/group-124.png';
import image_group_125 from './../../public/images/standard/group-125.png';
import image_group_126 from './../../public/images/standard/group-126.png';
import image_group_127 from './../../public/images/standard/group-127.png';
import image_group_128 from './../../public/images/standard/group-128.png';
import image_group_129 from './../../public/images/standard/group-129.png';
import image_happy from './../../public/images/standard/happy.png';
import image_cancel from './../../public/images/standard/cancel.png';
import image_4_2x from './../../public/images/standard/image-4@2x.png';

// const slideshow = (<div className="banner">
//   <button ng-click="is360View=!is360View" type="button" className="btn btn-primary btn--360" aria-label="Left Align" > {/* style="position: absolute; z-index: 100" */}
//     <span ng-if="!is360View"><img src="images/group-78@2x.png" alt="" /> Look Inside</span>
//     <span ng-if="is360View"><img src="images/camera@2x.png" alt="" /> View Photos</span>
//   </button>
//   <div className="slideshow" ng-show="!is360View">
//     <div className="slider-banner-container">
//       <div className="slider-banner">
//         <ul>
//           <li data-transition="random" data-slotamount="7" data-masterspeed="500" data-saveperformance="on"
//               ng-repeat="slide in slides"
//               data-title="Buy a car">
//
//             {/*<!-- main image -->*/}
//             <img ng-src="{{slide.image}}"  alt="slidebg1" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />
//
//             <div className="tp-caption default_bg large sfr tp-resizeme" data-x="0" data-y="70" data-speed="600"
//                  data-start="1200" data-end="9400" data-endspeed="600">
//               {/*{{slide.brand}}*/}
//             </div>
//
//             <div className="tp-caption dark_gray_bg sfl medium tp-resizeme" data-x="0" data-y="170" data-speed="600"
//                  data-start="1600" data-end="9400" data-endspeed="600"><i className="icon-check"></i>
//             </div>
//             <div className="tp-caption light_gray_bg sfb medium tp-resizeme" data-x="50" data-y="170" data-speed="600"
//                  data-start="1600" data-end="9400" data-endspeed="600">
//               {/*{{slide.text1}}*/}
//             </div>
//             <div className="tp-caption dark_gray_bg sfl medium tp-resizeme" data-x="0" data-y="220" data-speed="600"
//                  data-start="1800" data-end="9400" data-endspeed="600"><i className="icon-check"></i>
//             </div>
//             <div className="tp-caption light_gray_bg sfb medium tp-resizeme" data-x="50" data-y="220" data-speed="600"
//                  data-start="1800" data-end="9400" data-endspeed="600">
//               {/*{{slide.text2}}*/}
//             </div>
//             <div className="tp-caption dark_gray_bg sfl medium tp-resizeme" data-x="0" data-y="270" data-speed="600"
//                  data-start="2000" data-end="9400" data-endspeed="600"><i className="icon-check"></i>
//             </div>
//             <div className="tp-caption light_gray_bg sfb medium tp-resizeme" data-x="50" data-y="270" data-speed="600"
//                  data-start="2000" data-end="9400" data-endspeed="600">
//               {/*{slide.text3}}*/}
//             </div>
//           </li>
//         </ul>
//         <div className="tp-bannertimer tp-bottom"></div>
//       </div>
//     </div>
//   </div>
//   {/*<iframe ng-show="is360View" src="https://www.panono.com/p/jmr7n52eIbDn/embed?autorotate=false" width="100%" height="520" frameborder="0" scrolling="no" allowfullscreen></iframe>*/}
// </div>);

class Skblock extends React.Component {
  render() {return (<div>
    <h2>{this.props.header}</h2>
    <div>{ this.props.children }</div>
  </div>)}
}

class CarDetails extends React.Component {
  render() {
    return (<div>
      <div className="container">

        <div className="row">

          {/*<!-- slideshow start -->*/}
          {/*<!-- ================ -->*/}

          {/*<!-- ================ -->*/}
          {/*<!-- slideshow end -->*/}

          <br/>

          {/*<!-- LEFT COLUMN -->*/}
          <div className="col col-md-7">
            <Skblock header="'Overview'">
              <br/>
              {/*<icon-Skblock icon="'/images/group-114.png'" text="car.mileage"></icon-Skblock>*/}
              {/*<icon-Skblock icon="'/images/group-115.png'" text="car.transmission"></icon-Skblock>*/}
              {/*<icon-Skblock icon="'/images/group-116.png'" text="car.engine"></icon-Skblock>*/}
              {/*<icon-Skblock icon="'/images/group-117.png'" text="car.drive"></icon-Skblock>*/}
              {/*<icon-Skblock icon="'/images/group-119.png'" text="car.doors + ' doors ' + car.seats + ' seats'"></icon-Skblock>*/}
              {/*<icon-Skblock icon="'/images/group-120.png'" text="car.color"></icon-Skblock>*/}
              {/*<!--<icon-Skblock icon="'/images/group-121.png'" text="'Black'"></icon-Skblock>-->*/}
            </Skblock>

            <Skblock header={'What\'s this model about?'}>
              {/*{{car.descriptionBrand}}*/}
            </Skblock>

            <Skblock header={'We have it in excellent condition'}>
              {/*{{car.descriptionBrand}}*/}
            </Skblock>

            <Skblock header={'Nice features'}>
              <div className="col col-md-4" > {/*style="padding: 5px 0;"*/}
                <img src={image_ok} width="24" className="sk-details__icon-list-image"/>
                Steering Wheel Controls
              </div>
              <div className="col col-md-4"> {/*style="padding: 5px 0;"*/}
                <img src={image_ok} width="24" className="sk-details__icon-list-image"/>
                Paddle Shifters
              </div>
              <div className="col col-md-4"> {/*style="padding: 5px 0;"*/}
                <img src={image_ok} width="24" className="sk-details__icon-list-image"/>
                Premium Lights
              </div>
              <div className="col col-md-4"> {/*style="padding: 5px 0;"*/}
                <img src={image_ok} width="24" className="sk-details__icon-list-image"/>
                Turbocharger
              </div>
              <div className="col col-md-4"> {/*style="padding: 5px 0;"*/}
                <img src={image_ok} width="24" className="sk-details__icon-list-image"/>
                Parking Sensors
              </div>
            </Skblock>

            <Skblock header={'Car History'}>
              <div className="col col-md-4">  {/*style="padding: 5px 0;"*/}
                <img src={image_diploma_1} width="24" className="sk-details__icon-list-image"/>
                No Problems Found
              </div>
              <div className="col col-md-4">  {/*style="padding: 5px 0;"*/}
                <label>VIN code: </label> WVW7454WBVNVHD
              </div>
            </Skblock>

            <Skblock header={'Petrol Consumption'}>
              <div className="col col-md-4">  {/*style="padding: 5px 0;"*/}
                <img src={image_gas_station_2x} className="sk-details__icon-list-image"/>
              </div>
              <div className="col col-md-4">  {/*style="padding: 5px 0;"*/}
                <div className="row">
                  <div className="col col-md-6"><label>City: </label></div>
                  <div className="col col-md-6">7.5 l / 100 km</div>
                </div>
                <div className="row">
                  <div className="col col-md-6"><label>Highway: </label></div>
                  <div className="col col-md-6">6.5 l / 100 km</div>
                </div>
                <div className="row">
                  <div className="col col-md-6"><label>Average: </label></div>
                  <div className="col col-md-6">7.0 l / 100 km</div>
                </div>
              </div>
            </Skblock>

            <Skblock header={'Performance'}>

              {/*<!-- Left side -->*/}
              <div className="col col-md-6">  {/*style="padding: 5px 0;"*/}
                <div className="row">
                  <div className="col col-md-6"><label>Driver wheels: </label></div>
                  <div className="col col-md-6">Rear</div>
                </div>
              </div>
              <div className="col col-md-6">  {/*style="padding: 5px 0;"*/}
                <div className="row">
                  <div className="col col-md-6"><label>Doors: </label></div>
                  <div className="col col-md-6">
                    {/*{{car.doors}}</div>*/}
                </div>
              </div>
              <div className="col col-md-6">  {/*style="padding: 5px 0;"*/}
                <div className="row">
                  <div className="col col-md-6"><label>Compression ratio</label></div>
                  <div className="col col-md-6">10</div>
                </div>
              </div>
              <div className="col col-md-6">  {/*style="padding: 5px 0;"*/}
                <div className="row">
                  <div className="col col-md-6"><label>Compressor type</label></div>
                  <div className="col col-md-6">Turbocharger</div>
                </div>
              </div>
              <div className="col col-md-6">  {/*style="padding: 5px 0;"*/}
                <div className="row">
                  <div className="col col-md-6"><label>Configuration</label></div>
                  <div className="col col-md-6">Inline</div>
                </div>
              </div>
              <div className="col col-md-6">  {/*style="padding: 5px 0;"*/}
                <div className="row">
                  <div className="col col-md-6"><label>Cylinders</label></div>
                  <div className="col col-md-6">4</div>
                </div>
              </div>
              <div className="col col-md-6">  {/*style="padding: 5px 0;"*/}
                <div className="row">
                  <div className="col col-md-6"><label>Displacement</label></div>
                  <div className="col col-md-6">1997</div>
                </div>
              </div>

              {/*<!-- Right side -->*/}
              <div className="col col-md-6">  {/*style="padding: 5px 0;"*/}
                <div className="row">
                  <div className="col col-md-6"><label>Fuel type: </label></div>
                  <div className="col col-md-6">Premium unlead</div>
                </div>
              </div>
              <div className="col col-md-6">  {/*style="padding: 5px 0;"*/}
                <div className="row">
                  <div className="col col-md-6"><label>Horsepower</label></div>
                  <div className="col col-md-6">
                    {/*{{car.horsepower}}*/}
                  </div>
                </div>
              </div>
              <div className="col col-md-6">  {/*style="padding: 5px 0;"*/}
                <div className="row">
                  <div className="col col-md-6"><label>Size</label></div>
                  <div className="col col-md-6">2</div>
                </div>
              </div>
              <div className="col col-md-6">  {/*style="padding: 5px 0;"*/}
                <div className="row">
                  <div className="col col-md-6"><label>Torque</label></div>
                  <div className="col col-md-6">255</div>
                </div>
              </div>
              <div className="col col-md-6">  {/*style="padding: 5px 0;"*/}
                <div className="row">
                  <div className="col col-md-6"><label>Total values</label></div>
                  <div className="col col-md-6">16</div>
                </div>
              </div>
              <div className="col col-md-6">  {/*style="padding: 5px 0;"*/}
                <div className="row">
                  <div className="col col-md-6"><label>Power train</label></div>
                  <div className="col col-md-6">Gas</div>
                </div>
              </div>
              </div>
            </Skblock>

            <Skblock header={'Safety'}>
              <div className="sk-details__stars-outer-container">
                <div className="sk-details__stars-inner-container">
                  <img className="sk-details__star" src={image_star_2x}/>
                  <img className="sk-details__star" src={image_star_2x}/>
                  <img className="sk-details__star" src={image_star_2x}/>
                  <img className="sk-details__star" src={image_star_2x}/>
                  <img className="sk-details__star" src={image_star_2x}/>

                  <img className="sk-details__stars_euroncap" src={image_4_2x}/>
                </div>
              </div>
            </Skblock>

            <Skblock header={'Our Certified Inspector\'s Report'}>
              <div > {/*style="margin-left: 30px"*/}
                <div className="row">
                  <div className="col col-md-4"><label className="sk-details__certified_developer">Mr. Happy</label></div>
                  <div className="col col-md-3"><img src={image_happy} width="130" alt="happy" /></div>
                  <div className="col col-md-5">
                    <button className="btn btn-default sk-details__certified_have_a_question">Have a question?</button>
                  </div>
                </div>
                <div className="row">
                  <h4>Category 1</h4>
                  <div className="row">
                    <div className="col col-md-6"> {/*style="padding: 5px 0;"*/}
                      <img src={image_ok} width="24" className="sk-details__icon-list-image"/>
                      Automatic transmission flawless in cold temperature
                    </div>
                    <div className="col col-md-6"> {/*style="padding: 5px 0;"*/}
                      <img src={image_ok} width="24" className="sk-details__icon-list-image"/>
                      Steering wheel centered
                    </div>
                  </div>

                  <div className="row">
                    <div className="col col-md-6"> {/*style="padding: 5px 0;"*/}
                      <img src={image_ok} width="24" className="sk-details__icon-list-image"/>
                      Steering wheel centered
                    </div>
                    <div className="col col-md-6"> {/*style="padding: 5px 0;"*/}
                      <img src={image_cancel} width="24" className="sk-details__icon-list-image"/>
                      Automatic transmission flawless in cold temperature
                    </div>
                  </div>

                  <div className="row">
                    <div className="col col-md-6"> {/*style="padding: 5px 0;"*/}
                      <img src={image_ok} width="24" className="sk-details__icon-list-image"/>
                      Automatic transmission flawless in cold temperature
                    </div>
                    <div className="col col-md-6"> {/*style="padding: 5px 0;"*/}
                      <img src={image_ok} width="24" className="sk-details__icon-list-image"/>
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
            </Skblock>

            <Skblock header={'Skynda Care'}>
              <div className="row">
                <div className="col col-md-4"> {/*style="text-align: center; margin-bottom: 20px"*/}
                  <img className="sk-details__icon" src={image_group_124}/>
                  <h5>Vehicle Protection</h5>
                  <section>Award-winning repair coverage</section>
                </div>
                <div className="col col-md-4">
                  <img className="sk-details__icon" src={image_group_125}/>
                  <h5>Vehicle Protection</h5>
                  <section>Award-winning repair coverage</section>
                </div>
                <div className="col col-md-4">
                  <img className="sk-details__icon" src={image_group_126}/>
                  <h5>Vehicle Protection</h5>
                  <section>Award-winning repair coverage</section>
                </div>
                <div className="col col-md-4">
                  <img className="sk-details__icon" src={image_group_127}/>
                  <h5>Vehicle Protection</h5>
                  <section>Award-winning repair coverage</section>
                </div>
                <div className="col col-md-4">
                  <img className="sk-details__icon" src={image_group_128}/>
                  <h5>Vehicle Protection</h5>
                  <section>Award-winning repair coverage</section>
                </div>
                <div className="col col-md-4">
                  <img className="sk-details__icon" src={image_group_129}/>
                  <h5>Vehicle Protection</h5>
                  <section>Award-winning repair coverage</section>
                </div>
              </div>
            </Skblock>

            <Skblock header={'Reviews'}>
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="row">
                    <div className="col col-md-6">
                      <label >WHATCAR?</label> {/* style="font-size: 28px; font-weight: bolder; color: orangered" */}
                    </div>
                    <div className="col col-md-6">
                      <div> {/*style="float: right"*/}
                        <img className="sk-details__star" src={image_star}/>
                        <img className="sk-details__star" src={image_star}/>
                        <img className="sk-details__star" src={image_star}/>
                        <img className="sk-details__star" src={image_star}/>
                        <img className="sk-details__star" src={image_unstar}/>
                      </div>
                    </div>
                  </div>
                  <br/>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s <br />
                  <br/>
                  <button  className="btn btn-white btn-sm pull-right haha-button-01">Read {/* style="margin: -15px; border-radius: 5px 0 0 0;" */}
                    More
                  </button>
                </div>
              </div>
            </Skblock>

            <Skblock header={'Other cars that you might like'}>
              {/*<image-grid ng-if="similarcars && similarcars.length > 0" values="similarcars"></image-grid>*/}
            </Skblock>

          </div>

          <div className="col col-md-5">
            {/*<checkout ng-if="car" car="car"></checkout>*/}
          </div>
        </div>

        {/*<!--<div className="row">-->*/}
        {/*<!--<Skblock header="'Other cars that you might like'">-->*/}
        {/*<!--<image-grid ng-if="similarcars && similarcars.length > 0" values="similarcars"></image-grid>-->*/}

        {/*<!--&lt;!&ndash;<cars-grid cars="similarcars"></cars-grid>&ndash;&gt;-->*/}
        {/*<!--</Skblock>-->*/}
        {/*<!--</div>-->*/}
      </div>


    </div>
  )
  }
}

export default withStyles(s)(CarDetails);
