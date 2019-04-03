import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Breadcrumb from './Breadcrumb';

class HeaderContainer extends Component{

  componentDidMount(){
    const body = document.querySelector('body');
    window.onresize = () => {    
      if(window.innerWidth > 768 && body.classList.contains('offcanvas-menu')) {
        body.classList.remove('offcanvas-menu');
      }
    };
    // click outisde offcanvas
    body.onclick = ((e) => {
      var container = document.querySelector(".site-mobile-menu");
      if (container !== e.target && body.classList.contains('offcanvas-menu')) {
        body.classList.remove('offcanvas-menu');
      }
    });
  }

  toggleSideNav = () => {
    const body = document.querySelector('body');
    if (body.classList.contains('offcanvas-menu')) {
      body.classList.remove('offcanvas-menu');
    } else {
      body.classList.add('offcanvas-menu');
    }
  }

  render(){
    
    return ( 
      <React.Fragment>
        <Header 
          title='Shoppers'
          cartItems={this.props.cart.cartItems}
          toggleSideNav={this.toggleSideNav}
        />
        <Breadcrumb />
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({cart}) => ({cart});
export default withRouter(connect(mapStateToProps)(HeaderContainer));