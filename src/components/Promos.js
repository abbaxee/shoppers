import React from 'react'
import { Link } from 'react-router-dom';
import blog_1 from '../images/blog_1.jpg'

export default () => {
  return (
    <div>
      <div className="site-section block-8">
        <div className="container">
          <div className="row justify-content-center  mb-5">
            <div className="col-md-7 site-section-heading text-center pt-4">
              <h2>Big Sale!</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-7 mb-5">
              <Link to="/shop"><img src={ blog_1 } alt="blog" className="img-fluid rounded" /></Link>
            </div>
            <div className="col-md-12 col-lg-5 text-center pl-md-5">
              <h2><Link to="/shop">50% less in all items</Link></h2>
              <p className="post-meta mb-4">By <Link to="/">Carl Smith</Link> <span className="block-8-sep">&bullet;</span> September 3, 2018</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
              <p><Link to="/shop" className="btn btn-primary btn-sm">Shop Now</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
