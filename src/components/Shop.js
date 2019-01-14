import React, { Component } from 'react';
import Header from './Header';
import Pagination from './Pagination';
import ShopFilter from './ShopFilter';
import ShopProducts from './ShopProducts';
import Footer from './Footer';

import { connect } from 'react-redux';

class Shop extends Component {
  
  state = {
    shopItems: [...this.props.shopItems.shopItems]
  }
  
  sortItems = (storeItems, filter) => {  
    switch (filter) {
        case 'SORT_BY_NAME':            
            return this.setState({
                shopItems: [...storeItems.sort((a, b) => a.name.localeCompare(b.name))]
            });  
        case 'SORT_BY_NAME_REVERSE':            
            return this.setState({
                shopItems: [...storeItems.sort((a, b) => b.name.localeCompare(a.name))]
            });
        case 'SORT_BY_PRICE':            
            return this.setState({ 
                shopItems: [...storeItems.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))]
            });
        case 'SORT_BY_PRICE_REVERSE':            
            return this.setState({
                shopItems: [...storeItems.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))]
            });
        default:
            return storeItems;
    }
  }

  render() {

    const { shopItems } = this.props.shopItems;
    const { categories } =  this.props.categories;

    return (
      <div>
        <Pagination name="Shop" />   
        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-9 order-2">
                <ShopProducts shopItems={this.state.shopItems} 
                              categories={categories} 
                              sortItems={this.sortItems}
                              shopProducts={shopItems}
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

export default connect(mapStateToProps)(Shop);
