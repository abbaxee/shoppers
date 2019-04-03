import React, { Component } from 'react';
import { addToCart } from '../../reducers/cart'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SingleItem from './SingleItem';

class SingleItemContainer extends Component {

  state = {
    quantity: 1,
    selectedSize: null,
    quantityLimit: null
  }

  increment = () => {
    const qty = this.state.quantity 
    this.setState({
      quantity: qty >= this.state.availableSizesQuantity ? qty : qty + 1,
      quantityLimit : qty === this.state.availableSizesQuantity ? qty : null
    });

  }

  decrement = () => {
    const qty = this.state.quantity;
    this.setState({quantity: qty === 1 ? 1 : qty - 1})
  }

  handleQuantityInputChange = e => {
    const { availableSizesQuantity } = this.state;
    this.setState({
      quantity: parseInt(e.target.value) > availableSizesQuantity 
      ? availableSizesQuantity : parseInt(e.target.value || 0)
    })
  }

  getQuantityAvailable = (size, item) => {
    return item.quantity[size];
  }

  handleSizeChange = (e, item) => {
    const availableQuantity = this.getQuantityAvailable(e.target.value, item);
    const { quantity } = this.state;
    this.setState({
      selectedSize: e.target.value,
      availableSizesQuantity: availableQuantity,
      quantity: quantity > availableQuantity ? availableQuantity : quantity,
      quantityLimit : quantity === availableQuantity ? quantity : null
    })
  };

  render() {
    const { availableSizesQuantity, quantityLimit} = this.state;
    
    const { shopItems } = this.props.shopItems;
    const item = shopItems[this.props.location.state];
    
    const handleAddToCart = () => {
      if(!this.state.selectedSize) return;
      const {addToCart, history} = this.props;
      const cartItem = {
        id: item.id,
        name: item.name,
        quantity: this.state.quantity,
        price: item.price,
        size: this.state.selectedSize,
        image: item.display_src
      };
      addToCart(cartItem);
      history.push('/cart');
    }

    return (
      <SingleItem 
        item={item}
        quantity={this.state.quantity}
        quantityLimit={this.state.quantityLimit}
        increment={this.increment}
        decrement={this.decrement}
        availableSizesQuantity={availableSizesQuantity}
        quantityLimit={quantityLimit}
        handleQuantityInputChange={this.handleQuantityInputChange}
        handleSizeChange={this.handleSizeChange}
        handleAddToCart={handleAddToCart}
      />
    );
  }
}

const mapStateToProps = ({shopItems}) => ({shopItems});

const mapDispachToProps = (dispatch) => {
  return bindActionCreators({ addToCart }, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(SingleItemContainer);
