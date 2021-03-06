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
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';

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
        <ListItem primaryText={<ListItemText text="Car price" price="5600 €"/>} leftCheckbox={<Checkbox />}/>
        <ListItem primaryText={<ListItemText text="Insurance by Salva" price="20  €"/>} leftCheckbox={<Checkbox />}/>
        <ListItem primaryText={<ListItemText text="Kasko by Salva" price="40 €"/>} leftCheckbox={<Checkbox />}/>
        <ListItem primaryText={<ListItemText text="Full Tank on Delivery" price="70 €"/>} leftCheckbox={<Checkbox />}/>
        <ListItem primaryText={<ListItemText text="Other" price="18 €"/>} leftCheckbox={<Checkbox />}/>
        <ListItem primaryText={<ListItemText text="Service" price="109 €"/>} leftCheckbox={<Checkbox />}/>
        {/*<ListItem primaryText="Service"             secondaryText="109 €"   leftCheckbox={<Checkbox />} />*/}
      </List>

    </div>
  </div>
</li>);
const tab2 = (<li className="tab-pane fade active in" id="htab2">
  <div className="row">
    <div className="col-md-12">

      <List>
        <Subheader>Leasing a car</Subheader>
        <ListItem primaryText={<ListItemText text="Car price" price="5600 €"/>}/>
        <ListItem primaryText={<ListItemText text="Insurance by Salva" price="0  €"/>}/>
        <ListItem primaryText={<ListItemText text="Kasko by Salva" price="0 €"/>}/>
        <ListItem primaryText={<ListItemText text="Full Tank on Delivery" price="0 €"/>}/>
        <ListItem primaryText={<ListItemText text="Other" price="0 €"/>}/>
        <ListItem primaryText={<ListItemText text="Service" price="0 €"/>}/>
      </List>
    </div>

    <div className="col-md-12">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic qui non placeat ad explicabo
        dignissimos amet iusto veniam!</p>
      <p>Quo expedita tempore modi minima at adipisci saepe excepturi alias consequuntur sunt asperiores enim ut
        assumenda hic vitae, odio deleniti illo, veniam quas!</p>
    </div>
  </div>
</li>);


class CheckoutDialogContent extends React.Component {
  render() {
    return (<div>
      <div className="row">
        <div className="col col-md-6">
          <TextField floatingLabelText="First name" fullWidth={true}/>
        </div>
        <div className="col col-md-6">
          <TextField floatingLabelText="Last name" fullWidth={true}/>
        </div>
      </div>
      <div className="row">
        <div className="col col-md-6">
          <TextField floatingLabelText="E-mail" fullWidth={true}/>
        </div>
        <div className="col col-md-6">
          <TextField floatingLabelText="Phone Number" fullWidth={true}/>
        </div>
      </div>
      <div className="row">
        <div className="col col-md-12">
          <TextField floatingLabelText="ID Number" fullWidth={true}/>
        </div>
      </div>
      <div className="row">
        <div className="col col-md-12">
          <TextField floatingLabelText="Billing Address" fullWidth={true}/>
        </div>
      </div>
      <div className="row">
        <div className="col col-md-12">
          <TextField floatingLabelText="Shipping Address" fullWidth={true}/>
        </div>
      </div>
      <div className="row">
        <div className="col col-md-6">
          <TextField floatingLabelText="Delivery Date" fullWidth={true}/>
        </div>
        <div className="col col-md-6">
          <TextField floatingLabelText="Delivery Time" fullWidth={true}/>
        </div>
      </div>
    </div>);
  }
}

class Checkout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tab: 1, open: false};
  }

  setTab = (e, tab) => {
    this.setState({tab: tab});
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

    return (<div className={s.sk_details__checkout_container}>

      <Dialog
        title="One More Step"
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
      >
        <CheckoutDialogContent />
      </Dialog>

      <Tabs>
        <Tab label={`Buying car`} className={s.sk_details__checkout_tab}>
          <div className={s.sk_details__checkout_tab_inner}>
            {tab1}
            <RaisedButton label="Checkout" onTouchTap={this.handleOpen}
                          className={s.sk_details__checkout_tab_action_button}/>
          </div>
        </Tab>

        <Tab label="Leasing car" className={s.sk_details__checkout_tab}>
          <div className={s.sk_details__checkout_tab_inner}>
            {tab2}
            <RaisedButton label="Lease" onTouchTap={this.handleOpen}
                          className={s.sk_details__checkout_tab_action_button}/>
          </div>
        </Tab>
      </Tabs>

    </div>);
  }
}

export default Checkout;
