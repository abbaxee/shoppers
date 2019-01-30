import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ShopProducts extends Component {
  
  sortShopItems = (filter) => {
    return this.props.sortItems(this.props.shopProducts, filter)
  }

  render() {  
      
      return (  
        <div>
          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="float-md-left mb-4"><h2 className="text-black h5">{ this.props.params? this.props.params.name+' Category' : 'Shop All'}</h2></div>
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
                    <span className="dropdown-item" onClick={()=> this.sortShopItems('SORT_BY_NAME')}>Name, A to Z</span>
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
            { 
              this.props.shopItems.map( (item, index) => {
                return(
                  <div key={index} className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                    <div className="block-4 text-center border">
                      <figure className="block-4-image">
                        <Link to={{pathname: "/shop/"+item.id, state: index}}><img src={ item.display_src } alt={item.name} className="img-fluid" /></Link>
                      </figure>
                      <div className="block-4-text p-4">
                        <h3><Link to={{pathname: "/shop/"+item.id, state: index}}>{item.name}</Link></h3>
                        <p className="mb-0">Finding perfect product</p>
                        <p className="text-primary font-weight-bold">${item.price}</p>
                      </div>
                    </div>
                  </div>
                ) ;
              })
            }
          </div>

          <div className="row" data-aos="fade-up">
            <div className="col-md-12 text-center">
              <div className="site-block-27">
                <ul>
                  <li><Link to="/shop">&lt;</Link></li>
                  <li className="active"><span>1</span></li>
                  <li><Link to="/shop">2</Link></li>
                  <li><Link to="/shop">3</Link></li>
                  <li><Link to="/shop">4</Link></li>
                  <li><Link to="/shop">5</Link></li>
                  <li><Link to="/shop">&gt;</Link></li>
                </ul>
              </div>
            </div>
          </div> 
        </div>
      );
    }
}

export default ShopProducts;
