import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import { removeFromCart } from '../reducers/cart'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Cart extends Component {
    render() {
		const {cart, removeFromCart} = this.props;
		return (
			<div className="site-wrap">
				<ShoppingCart 
					cart={cart.cartItems}
					removeFromCart={removeFromCart}
				/>
			</div>
		);
    }
}



const mapStateToProps = ({cart}) => ({cart});
const mapDispachToProps = (dispatch) => {
	return bindActionCreators({ removeFromCart }, dispatch);
}
export default connect(mapStateToProps, mapDispachToProps)(Cart);
