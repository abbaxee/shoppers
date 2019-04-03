import React from 'react';
import { Link } from 'react-router-dom';


export default (props) => {   
  
  const filterCategorySum = (category) => {
    return props.shopItems.filter(item => item.category === category).length;
  }

  const filterSizesSum = (size) => {
    let total = 0;
    const { shopItems } = props;
    for (let i = 0; i < shopItems.length; i++) {
      total += parseFloat(shopItems[i].quantity[size]);
    }
    return total;
  }

  return ( 
    <div>
      <div className="border p-4 rounded mb-4">
        <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
        <ul className="list-unstyled mb-0">

          {props.categories.map( category => {
            return <li key={category.id} className="mb-1"><Link to={'/category/'+category.name} className="d-flex"><span>{category.name}</span> <span className="text-black ml-auto">({filterCategorySum(category.name)})</span></Link></li>;
          })}
        </ul>
      </div>

      <div className="border p-4 rounded mb-4">
        <div className="mb-4">
          <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Size</h3>
          <label htmlFor="s_sm" className="d-flex">
            <input type="checkbox" id="s_sm" className="mr-2 mt-1" /> <span className="text-black">Small ({filterSizesSum('small')})</span>
          </label>
          <label htmlFor="s_md" className="d-flex">
            <input type="checkbox" id="s_md" className="mr-2 mt-1" /> <span className="text-black">Medium ({filterSizesSum('medium')})</span>
          </label>
          <label htmlFor="s_lg" className="d-flex">
            <input type="checkbox" id="s_lg" className="mr-2 mt-1" /> <span className="text-black">Large ({filterSizesSum('large')})</span>
          </label>
        </div>
      </div> 
    </div>
  );
}
