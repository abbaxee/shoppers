import React from 'react'
import { Link } from 'react-router-dom';
import Women from '../../images/women.jpg'
import Children from '../../images/children.jpg'
import Men from '../../images/men.jpg'

export default () => {
  return (
    <div>
      <div className="site-section site-blocks-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay="">
              <Link className="block-2-item" to="/category/Women">
                <figure className="image">
                  <img src={ Women } alt="" className="img-fluid" />
                </figure>
                <div className="text">
                  <span className="text-uppercase">Collections</span>
                  <h3>Women</h3>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
              <Link className="block-2-item" to="/category/Children">
                <figure className="image">
                  <img src={ Children } alt="" className="img-fluid" />
                </figure>
                <div className="text">
                  <span className="text-uppercase">Collections</span>
                  <h3>Children</h3>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
              <Link className="block-2-item" to="/category/Men">
                <figure className="image">
                  <img src={ Men } alt="" className="img-fluid" />
                </figure>
                <div className="text">
                  <span className="text-uppercase">Collections</span>
                  <h3>Men</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
