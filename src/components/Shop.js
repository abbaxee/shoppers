import React, { Component } from 'react';
import Header from './Header';
import Pagination from './Pagination';
import ShopFilter from './ShopFilter';
import ShopProducts from './ShopProducts';
import Footer from './Footer';
import { sortShop } from '../reducers/shopItems'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Shop extends Component {
  
  render() {

    const { shopItems } = this.props.shopItems;
    const { categories } =  this.props.categories;

    return (
      <div>
        <Header name='Shop'/>
        <Pagination name="Shop" />
        
        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-9 order-2">
                <ShopProducts shopItems={shopItems} categories={categories} sortShop={this.props.sortShop}/>
              </div>
              <div className="col-md-3 order-1 mb-5 mb-md-0">
                <ShopFilter shopItems={shopItems} categories={categories}/>
              </div>
            </div>
          </div>
        </div>  
        
      
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({shopItems, categories}) => ({shopItems, categories});

const mapDispachToProps = (dispatch) => {
  return bindActionCreators({ sortShop }, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Shop);
