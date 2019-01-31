import React, { Component } from 'react';
import { addToCart } from '../reducers/cart'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SingleItem extends Component {

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
      <div className="site-wrap">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={item.display_src} alt={item.name} className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h2 className="text-black">{item.name}</h2>
                <p>{item.description}</p>
                <p><strong className="text-primary h4">${item.price}</strong></p>
                <p>Color: {item.color}</p>
                <div className="mb-1 d-flex">
                  <label htmlFor="option-sm" className="d-flex mr-3 mb-3">
                    <span className="d-inline-block mr-2" style={{top:-2, position: 'relative'}}>
                      <input type="radio" id="option-sm" name="shop-sizes" value="small" onChange={(e) => this.handleSizeChange(e, item)}/>
                    </span> 
                    <span className="d-inline-block text-black">Small</span>
                  </label>
                  <label htmlFor="option-md" className="d-flex mr-3 mb-3">
                    <span className="d-inline-block mr-2" style={{top:-2, position: 'relative'}}>
                      <input type="radio" id="option-md" name="shop-sizes" value="medium" onChange={(e) => this.handleSizeChange(e, item)}/>
                    </span> 
                    <span className="d-inline-block text-black">Medium</span>
                  </label>
                  <label htmlFor="option-lg" className="d-flex mr-3 mb-3">
                    <span className="d-inline-block mr-2" style={{top:-2, position: 'relative'}}><input type="radio" id="option-lg" name="shop-sizes" value="large" onChange={(e) => this.handleSizeChange(e, item)}/></span> <span className="d-inline-block text-black">Large</span>
                  </label>
                </div>
                <div className="mb-5">
                  <div className="input-group mb-3" style={{maxWidth: 120}}>
                    <div className="input-group-prepend">
                      <button className="btn btn-outline-primary" onClick={ () => this.decrement() } type="button">-</button>
                    </div>
                    <input type="text" className="form-control text-center" onChange={this.handleQuantityInputChange} value={ this.state.quantity } aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    <div className="input-group-append">
                      <button className="btn btn-outline-primary" onClick={ () => this.increment() } type="button">+</button>
                    </div>
                  </div>
                  { quantityLimit ? <code><span className='text-danger'> Only {quantityLimit} pieces can be purchased at the moment </span><br/></code> : '' }
                  <small>{availableSizesQuantity ? <span > {availableSizesQuantity} pieces available </span>: <span className="text-danger">Choose a size to see available quantity</span> }</small>
                </div>
                <p><button onClick={() => handleAddToCart() }  className="buy-now btn btn-sm btn-primary">Add To Cart</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({shopItems}) => ({shopItems});

const mapDispachToProps = (dispatch) => {
  return bindActionCreators({ addToCart }, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(SingleItem);
