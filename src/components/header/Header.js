import React from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks';

export default ({
  title,
  cartItems,
  toggleSideNav
}) => {
  return (
    <div>
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header"> 
          <div className="site-mobile-menu-logo"><Link to="/" className="js-logo-clone">{title}</Link></div>
          <div className="site-mobile-menu-close "><span className="ion-ios-close js-menu-toggle"></span></div>
        </div>
        <div className="site-mobile-menu-body">
          <ul className="site-nav-wrap">
            <NavLinks />
          </ul>
        </div>
      </div>
      <header className="site-navbar" role="banner" >
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
                  <Link to="/" className="js-logo-clone">{title}</Link>
                </div>
              </div>
              <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                <div className="site-top-icons">
                  <ul>
                    <li><Link to="/"><span className="icon icon-person"></span></Link></li>
                    <li><Link to="/"><span className="icon icon-heart-o"></span></Link></li>
                    <li>
                      <Link to="/cart" className="site-cart">
                        <span className="icon icon-shopping_cart"></span>
                        <span className="count">{cartItems.length}</span>
                      </Link>
                    </li> 
                    <li className="d-inline-block d-md-none ml-md-0"><Link to='#' onClick={toggleSideNav} className="site-menu-toggle active js-menu-toggle"><span className="icon-menu"></span></Link></li>
                  </ul>
                </div> 
              </div>
            </div>
          </div>
        </div> 
        <nav className="site-navigation text-right text-md-center" role="navigation">
          <div className="container">
            <ul className="site-menu js-clone-nav  d-none d-md-block">
              <NavLinks/>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}
