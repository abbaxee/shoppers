import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Categories(props) {
  
  const categoryItemSum = (category) => {
    return props.shopItems.shopItems.filter(item => item.category === category).length;
  }

  const { categories } = props.categories;
  return (
    <div className="site-wrap">
      <div className="border p-4 rounded mb-4 container" >
        <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
        <ul className="list-unstyled mb-0">
          {
            categories.map( category => {
              return ( 
                <li key={category.id} className="mb-1">
                  <Link to={'/category/'+category.name} className="d-flex">
                    <span>{category.name}</span> 
                    <span className="text-black ml-auto">({categoryItemSum(category.name)})</span>
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}


const mapStateToProps = ({categories, shopItems}) => ({categories, shopItems});
export default connect(mapStateToProps)(Categories);
