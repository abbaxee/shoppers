import React, { Component } from 'react';
import Header from './Header';
import Pagination from './Pagination';
import Footer from './Footer';
import ShopFilter from './ShopFilter';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { sortShop } from '../reducers/shopItems'
import ShopProducts from './ShopProducts';

class Category extends Component {

    render() {
      const { params } = this.props.match;
      const { shopItems } = this.props.shopItems;
      const { categories } =  this.props.categories; 
      
      const filteredProducts = shopItems.filter(item => item.category === params.name);
		
      return (
          <div className="site-wrap">
              <Header name='Category'/>
              <Pagination name='Category'/>

              <div className="site-section">
                <div className="container">

                  <div className="row mb-5">
                    <div className="col-md-9 order-2">
                      <ShopProducts shopItems={filteredProducts} 
                                    categories={categories} 
                                    sortShop={this.props.sortShop}
                                    params={params}
                      />
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

export default connect(mapStateToProps, mapDispachToProps)(Category);
