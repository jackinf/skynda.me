/**
 * Created by zekar on 9/15/2016.
 */

import React from 'react';
import s from './../details.css';

// Material-UI
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';

class ListItemText extends React.Component {
 render() {
   return (<div>{this.props.text} <p className={s.sk_details__checkout_price}>{this.props.price}</p></div>);
 }
}

const tab1 = (<li className="tab-pane fade active in" id="htab1">
  <div className="row">
    <div className="col-md-12">

      <List>
        <Subheader>Buying a car</Subheader>
        <ListItem primaryText={<ListItemText text="Car price" price="5600 €"/>}  leftCheckbox={<Checkbox />}  />
        <ListItem primaryText={<ListItemText text="Insurance by Salva" price="20  €"/>}  leftCheckbox={<Checkbox />}  />
        <ListItem primaryText={<ListItemText text="Kasko by Salva" price="40 €"/>}  leftCheckbox={<Checkbox />}  />
        <ListItem primaryText={<ListItemText text="Full Tank on Delivery" price="70 €"/>}  leftCheckbox={<Checkbox />}  />
        <ListItem primaryText={<ListItemText text="Other" price="18 €"/>}  leftCheckbox={<Checkbox />}  />
        <ListItem primaryText={<ListItemText text="Service" price="109 €"/>}  leftCheckbox={<Checkbox />}  />
        {/*<ListItem primaryText="Service"             secondaryText="109 €"   leftCheckbox={<Checkbox />} />*/}
      </List>

    </div>
  </div>
</li>);
const tab2 =(<li className="tab-pane fade active in" id="htab2">
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
</li>);


class Checkout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {leaseTab: false};
  }

  changeCheckoutTab = () => {
    let toggled = !this.state.leaseTab;
    this.setState({leaseTab: toggled});
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (<div id="scroller" className="checkout-container">

      <Dialog
        title="Dialog With Actions"
        actions={actions}
        modal={false}
        open={!!this.state.open}
        onRequestClose={this.handleClose}
      >
        The actions in this window were passed in as an array of React objects.


      </Dialog>

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
        {this.state.leaseTab ? tab2 : tab1}
      </div>

      {this.state.leaseTab
        ? (<RaisedButton label="Lease" onTouchTap={this.handleOpen} />)
        : (<RaisedButton label="Checkout" onTouchTap={this.handleOpen} />)}

    </div>);
  }
}

export default Checkout;
