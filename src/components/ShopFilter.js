import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShopFilter extends Component {   

    filterCategorySum = (category) => {
      return this.props.shopItems.filter(item => item.category === category).length;
    }

    filterSizesSum = (size) => {
      let total = 0;
      const { shopItems } = this.props;
      for (let i = 0; i < shopItems.length; i++) {
        total += parseFloat(shopItems[i].quantity[size]);
      }
      return total;
    }

    render() {
      return ( 
        <div>
           <div className="border p-4 rounded mb-4">
              <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
              <ul className="list-unstyled mb-0">

                {this.props.categories.map( category => {
                  return <li key={category.id} className="mb-1"><Link to={'/category/'+category.name} className="d-flex"><span>{category.name}</span> <span className="text-black ml-auto">({this.filterCategorySum(category.name)})</span></Link></li>;
                })}
              </ul>
            </div>

            <div className="border p-4 rounded mb-4">
              <div className="mb-4">
                <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Size</h3>
                <label htmlFor="s_sm" className="d-flex">
                  <input type="checkbox" id="s_sm" className="mr-2 mt-1" /> <span className="text-black">Small ({this.filterSizesSum('small')})</span>
                </label>
                <label htmlFor="s_md" className="d-flex">
                  <input type="checkbox" id="s_md" className="mr-2 mt-1" /> <span className="text-black">Medium ({this.filterSizesSum('medium')})</span>
                </label>
                <label htmlFor="s_lg" className="d-flex">
                  <input type="checkbox" id="s_lg" className="mr-2 mt-1" /> <span className="text-black">Large ({this.filterSizesSum('large')})</span>
                </label>
              </div>
            </div> 
        </div>
      );
    }
}

export default ShopFilter;
