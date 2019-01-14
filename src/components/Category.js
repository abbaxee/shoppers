import React, { Component } from 'react';
import Pagination from './Pagination';
import Footer from './Footer';
import ShopFilter from './ShopFilter';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { sortShop } from '../reducers/shopItems'
import ShopProducts from './ShopProducts';

class Category extends Component {

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
    const { params } = this.props.match;
    const { shopItems } = this.props.shopItems;
    const { categories } =  this.props.categories; 

    const filteredItems = this.state.shopItems.filter(item => item.category === params.name);
   
    return (
        <div className="site-wrap">
            <Pagination name='Category'/>
            <div className="site-section">
              <div className="container">
                
                <div className="row mb-5">
                  <div className="col-md-9 order-2">
                    <ShopProducts shopItems={filteredItems} 
                                  categories={categories} 
                                  sortItems={this.sortItems}
                                  params={params}
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

const mapDispachToProps = (dispatch) => {
  return bindActionCreators({ sortShop }, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Category);
