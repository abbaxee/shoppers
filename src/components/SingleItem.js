import React, { Component } from 'react';
import Header from './Header';
import ShopPagination from './ShopPagination';
import Footer from './Footer';
import { addToCart } from '../reducers/cart'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SingleItem extends Component {

  state = {
    quantity: 1,
    selectedSize: 'small'
  }
  
  increment = () => {
    this.setState({quantity: this.state.quantity + 1 });
  }

  decrement = () => {
    this.state.quantity === 1 ? 
    this.setState({quantity: this.state.quantity = 1}) : 
    this.setState({quantity: this.state.quantity - 1 })
  }

  handleOptionChange = e => {
    this.setState({
      selectedSize: e.target.value
    });
  };

  render() {

    const { shopItems } = this.props.shopItems;
    
    const i = shopItems.findIndex((item)=>item.id === this.props.match.params.id);
    const item = shopItems[i];
    
    const handleAddToCart = () => {
      const cartItem = {
        id: item.id,
        name: item.name,
        quantity: this.state.quantity,
        price: item.price,
        size: this.state.selectedSize,
        image: item.display_src
      };
      console.log(cartItem);
      this.props.addToCart(cartItem);
    }

    return (
      <div className="site-wrap">
        <Header name="Shop"/>  
        <ShopPagination name={item.name} />
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={item.display_src} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h2 className="text-black">{item.name}</h2>
                <p>{item.description}</p>
                <p><strong className="text-primary h4">${item.price}</strong></p>
                <div className="mb-1 d-flex">
                  <label htmlFor="option-sm" className="d-flex mr-3 mb-3">
                    <span className="d-inline-block mr-2" style={{top:-2, position: 'relative'}}><input type="radio" id="option-sm" name="shop-sizes" value="small" onChange={this.handleOptionChange}/></span> <span className="d-inline-block text-black">Small</span>
                  </label>
                  <label htmlFor="option-md" className="d-flex mr-3 mb-3">
                    <span className="d-inline-block mr-2" style={{top:-2, position: 'relative'}}><input type="radio" id="option-md" name="shop-sizes" value="medium" onChange={this.handleOptionChange}/></span> <span className="d-inline-block text-black">Medium</span>
                  </label>
                  <label htmlFor="option-lg" className="d-flex mr-3 mb-3">
                    <span className="d-inline-block mr-2" style={{top:-2, position: 'relative'}}><input type="radio" id="option-lg" name="shop-sizes" value="large" onChange={this.handleOptionChange}/></span> <span className="d-inline-block text-black">Large</span>
                  </label>
                </div>
                <div className="mb-5">
                  <div className="input-group mb-3" style={{maxWidth: 120}}>
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-primary" onClick={ () => this.decrement() } type="button">-</button>
                  </div>
                  <input type="text" className="form-control text-center" value={this.state.quantity} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-primary" onClick={ () => this.increment() } type="button">+</button>
                  </div>
                </div>

                </div>
                <p><button onClick={() => handleAddToCart() } className="buy-now btn btn-sm btn-primary">Add To Cart</button></p>

              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({shopItems}) => ({shopItems});

const mapDispachToProps = (dispatch) => {
  return bindActionCreators({ addToCart }, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(SingleItem);
