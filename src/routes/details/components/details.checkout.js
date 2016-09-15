/**
 * Created by zekar on 9/15/2016.
 */

import React from 'react';
import s from './../details.css';

class Checkout extends React.Component {

  constructor() {
    super();
    this.state = {leaseTab: false};
  }

  changeCheckoutTab = () => {
    let toggled = !this.state.leaseTab;
    this.setState({leaseTab: toggled});
  };

  openCheckoutModal = () => {
    // TODO: open modal
  };

  render() {
    return (<div id="scroller" className="checkout-container">
      <ul className="nav nav-tabs" role="tablist">
        <li className="active col-md-6">
          <a href="#" role="tab" aria-expanded="true" onClick={e => this.changeCheckoutTab(e)}>
              <span className="nav-tab-header">
                  Buy Now<br/>
                  <span className="nav-tab-header-numbers">
                    {/*{{carData.price}} €*/}
                  </span>
              </span>
          </a>
        </li>
        <li className="col-md-6">
          <a href="#" role="tab" aria-expanded="false" onClick={e => this.changeCheckoutTab(e)}>
            <span className="nav-tab-header">
                Lease<br/>
                <span className="nav-tab-header-numbers">
                  {/*{{(carData.price/24).toFixed(2)}}€*/}
                </span>
            </span>
          </a>
        </li>
      </ul>

      <div className="tab-content">
        <li className="tab-pane fade active in" id="htab1">
          <div className="row">
            <div className="col-md-12">
              <ul className="list-icons">
                <li>
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        <input type="checkbox" className="checkbox checkbox-inline" checked /> Car Price
                      </label>
                    </div>
                    <div className="col-md-6 text-align-right text-bold">
                      {/*{{carData.price}} €*/}
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        <input type="checkbox" className="checkbox checkbox-inline" /> Insurance by Salva
                      </label>
                    </div>
                    <div className="col-md-6 text-align-right text-bold">20 €</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        <input type="checkbox" className="checkbox checkbox-inline" /> Kasko by Salva
                      </label>
                    </div>
                    <div className="col-md-6 text-align-right text-bold">40 €</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        <input type="checkbox" className="checkbox checkbox-inline" checked /> Full Tank on Delivery
                      </label>
                    </div>
                    <div className="col-md-6 text-align-right text-bold">70 €</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        <input type="checkbox" className="checkbox checkbox-inline" /> Other
                      </label>
                    </div>

                    <div className="col-md-6 text-align-right text-bold">18 €</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        <input type="checkbox" className="checkbox checkbox-inline" checked /> Service
                      </label>
                    </div>
                    <div className="col-md-6 text-align-right text-bold">109 €</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="tab-pane fade" id="htab2">
          <div className="row">
            <ul className="list-icons">
              <li>
                <div className="row">
                  <div className="col-md-6"><i className="icon-check pr-10"></i> Car Price</div>
                  <div className="col-md-6 text-align-right text-bold">
                    {/*{{carData.price}} €*/}
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="col-md-6"><i className="icon-check pr-10"></i> Insurance by Salva</div>
                  <div className="col-md-6 text-align-right">0 €</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="col-md-6"><i className="icon-check pr-10"></i> Kasko by Salva</div>
                  <div className="col-md-6 text-align-right">0 €</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="col-md-6"><i className="icon-check pr-10"></i> Full Tank on Delivery</div>
                  <div className="col-md-6 text-align-right">0 €</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="col-md-6"><i className="icon-check pr-10"></i> Other</div>
                  <div className="col-md-6 text-align-right">0 €</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="col-md-6"><i className="icon-check pr-10"></i> Service</div>
                  <div className="col-md-6 text-align-right">0 €</div>
                </div>
              </li>
            </ul>
            <div className="col-md-12">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic qui non placeat ad explicabo
                dignissimos amet iusto veniam!</p>
              <p>Quo expedita tempore modi minima at adipisci saepe excepturi alias consequuntur sunt asperiores enim ut
                assumenda hic vitae, odio deleniti illo, veniam quas!</p>
            </div>
          </div>
        </li>
      </div>

      {this.state.leaseTab
        ? (<div className="btn-checkout-container"><a className="btn btn-primary" onClick={this.openCheckoutModal}>Lease</a></div>)
        : (<div className="btn-checkout-container"><a className="btn btn-primary" onClick={this.openCheckoutModal}>Checkout</a></div>)}

    </div>);
  }
}

export default Checkout;
