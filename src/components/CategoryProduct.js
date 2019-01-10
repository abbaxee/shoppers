import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CategoryProducts extends Component {
  sortShopItems = (filter) => {
    console.log('sorting the items');
    this.props.sortShop(this.props.shopItems, filter);
  }
    
  render() {  
      return (
        <div>
          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="float-md-left mb-4"><h2 className="text-black h5">{this.props.params.name} Collection</h2></div>
              <div className="d-flex">
                <div className="dropdown mr-1 ml-md-auto">
                  <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Latest
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                    <Link className="dropdown-item" to="/category/Men">Men</Link>
                    <Link className="dropdown-item" to="/category/Women">Women</Link>
                    <Link className="dropdown-item" to="/category/Children">Children</Link>
                  </div>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Sort Products</button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                    <span className="dropdown-item" onClick={()=>this.sortShopItems('SORT_BY_NAME')}>Name, A to Z</span>
                    <span className="dropdown-item" onClick={()=>this.sortShopItems('SORT_BY_NAME_REVERSE')}>Name, Z to A</span>
                    <div className="dropdown-divider"></div>
                    <span className="dropdown-item" onClick={()=>this.sortShopItems('SORT_BY_PRICE')}>Price, low to high</span>
                    <span className="dropdown-item" onClick={()=>this.sortShopItems('SORT_BY_PRICE_REVERSE')}>Price, high to low</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mb-5"> 
          {this.props.shopItems.filter(item => item.category === this.props.params.name).map( item => {
            return(
              <div key={item.id} className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                <div className="block-4 text-center border">
                  <figure className="block-4-image">
                    <Link to={"/shop/"+item.id}><img src={ item.display_src } alt="" className="img-fluid" /></Link>
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><Link to={"/shop/"+item.id}>{item.name}</Link></h3>
                    <p className="mb-0">Finding perfect products</p>
                    <p className="text-primary font-weight-bold">${item.price}</p>
                  </div>
                </div>
              </div>
            ) ;
          })}
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-md-12 text-center">
              <div className="site-block-27">
                <ul>
                  <li><Link to="/">&lt;</Link></li>
                  <li className="active"><span>1</span></li>
                  <li><Link to="/">2</Link></li>
                  <li><Link to="/">3</Link></li>
                  <li><Link to="/">4</Link></li>
                  <li><Link to="/">5</Link></li>
                  <li><Link to="/">&gt;</Link></li>
                </ul>
              </div>
            </div>
          </div> 
        </div>
      );
    }
}

export default CategoryProducts;
