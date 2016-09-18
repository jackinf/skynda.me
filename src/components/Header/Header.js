/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';

import image_1 from './../../public/images/standard/skynda logo 4-mask-4@2x.png';
import image_2 from './../../public/images/standard/SKYNDA@2x.png';

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Header extends React.Component {

  constructor() {
    super();

    this.toggleModal = this.toggleModal.bind(this);
    this.state = {modal1: false, modal2: false, modal3: false};
  }

  toggleModal(nr, isOpen) {
    switch (nr) {
      case 1: this.setState({modal1: isOpen, modal2: false, modal3: false}); break;
      case 2: this.setState({modal1: false, modal2: isOpen, modal3: false}); break;
      case 3: this.setState({modal1: false, modal2: false, modal3: isOpen}); break;
    }
  };

  render() {
    return (
      <div className="container">
        <Navbar>
          <NavbarBrand href="/">
            <NavLink><img className={`${s["sk_logo"]} pull-left`} src={image_1} /></NavLink>
            <NavLink><img className={s["sk_logo"]} src={image_2} /></NavLink>
          </NavbarBrand>
          <Nav className="pull-xs-right" navbar>
            {/*<NavItem>*/}
              {/*<NavLink href="#" className={`${s["sk_menu__sell"]}`}*/}
                       {/*onClick={e => this.toggleModal(1, true)}>Sell Your Car</NavLink>*/}
            {/*</NavItem>*/}
            {/*<NavItem>*/}
              {/*<NavLink href="/search" className={s["sk_menu__buy"]}>Buy Your Car</NavLink>*/}
            {/*</NavItem>*/}
          </Nav>
        </Navbar>


        {
          /**
           *  MODAL WINDOWS / DIALOG WINDOWS
           */
        }

        <Dialog
          title="Sell Your Car"
          actions={[<RaisedButton label="Calculate" primary={true} onTouchTap={e => this.toggleModal(2, true)}/>]}
          modal={false}
          open={this.state.modal1}
          onRequestClose={e => this.toggleModal(1, false)}
        >
          <p>With Skynda you can sell your car online quickly & easily.</p>

          <p>Enter your cars VIN number and we instantly provide you with a quote.
            If you like our offer, confirm it & specify the location where we can pick it up.
            After that you will receive the payment for your car.</p>

          <p>That’s how simple it is.</p>

          <div className="row">
            <div className="col col-md-12">
              <TextField floatingLabelText="Your VIN Code*" fullWidth={true}/>
            </div>
          </div>
        </Dialog>

        <Dialog
          title="Your Car Value"
          actions={[<RaisedButton label="Sell" primary={true} onTouchTap={e => this.toggleModal(3, true)}/>]}
          modal={false}
          open={this.state.modal2}
          onRequestClose={e => this.toggleModal(2, false)}
        >
          <div className="row">
            <div className="row">
              <div className="col col-md-6">
                <TextField floatingLabelText="Pick-up Address*" fullWidth={true}/>
              </div>
              <div className="col col-md-6">
                <TextField floatingLabelText="Your Name*" fullWidth={true}/>
              </div>
            </div>
            <div className="row">
              <div className="col col-md-12">
                <TextField floatingLabelText="Your E-mail*" fullWidth={true}/>
              </div>
            </div>
          </div>
        </Dialog>

        <Dialog
          title="Done"
          actions={[<RaisedButton label="Close" primary={true} onTouchTap={e => this.toggleModal(3, false)}/>]}
          modal={false}
          open={this.state.modal3}
          onRequestClose={e => this.toggleModal(3, false)}
        >
          <div className="row">
            <h5>Thank you for trying out our service! This was just a test.</h5>
          </div>
        </Dialog>


      </div>
    );

  }
}

export default withStyles(s)(Header);
