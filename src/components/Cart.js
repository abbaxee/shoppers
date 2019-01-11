import React, { Component } from 'react';
import Header from './Header';
import Pagination from './Pagination';
import ShoppingCart from './ShoppingCart';
import Footer from './Footer';

import { connect } from 'react-redux';

class Cart extends Component {
    render() {
			return (
				<div className="site-wrap">
					<Header name='Cart' />
					<Pagination name='Cart' />
					<ShoppingCart cart={this.props.cart.cartItems}/>
					<Footer />
				</div>
			);
    }
}



const mapStateToProps = ({cart}) => ({cart});
export default connect(mapStateToProps)(Cart);
