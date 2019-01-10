import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      <header className="site-navbar" role="banner">
        <div className="site-navbar-top">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                <form action="" className="site-block-top-search">
                  <span className="icon icon-search2"></span>
                  <input type="text" className="form-control border-0" placeholder="Search" />
                </form>
              </div>

              <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                <div className="site-logo">
                  <a href="/" className="js-logo-clone">Shoppers</a>
                </div>
              </div>

              <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                <div className="site-top-icons">
                  <ul>
                    <li><a href="/"><span className="icon icon-person"></span></a></li>
                    <li><a href="/"><span className="icon icon-heart-o"></span></a></li>
                    <li>
                      <a href="/cart" className="site-cart">
                        <span className="icon icon-shopping_cart"></span>
                        <span className="count">2</span>
                      </a>
                    </li> 
                    <li className="d-inline-block d-md-none ml-md-0"><a href="/" className="site-menu-toggle js-menu-toggle"><span className="icon-menu"></span></a></li>
                  </ul>
                </div> 
              </div>

            </div>
          </div>
        </div> 
        <nav className="site-navigation text-right text-md-center" role="navigation">
          <div className="container">
            <ul className="site-menu js-clone-nav d-none d-md-block">
              <li className={ props.name === 'Home' ? 'active' : ''}>
                <Link to="/">Home</Link>
              </li>
              <li className={ props.name === 'About' ? 'active' : ''}>
                <Link to="/about">About</Link>
              </li>
              <li className={props.name === 'Shop' ? 'active' : ''}><Link to="/shop">Shop</Link></li>
              <li className={props.name === 'Category' ? 'active' : ''}><Link to="/category">Categories</Link></li>
              <li className={props.name === 'Catalog' ? 'active' : ''}><Link to="/catalog">Catalogue</Link></li>
              <li><Link to="/">New Arrivals</Link></li>
              <li className={props.name === 'Contact' ? 'active' : ''}><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}
