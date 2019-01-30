import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

//Import Components
import Support from './Support';
import Collections from './Collections';
import Carousel from './Carousel';
import Promos from './Promos';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom'
import BackgroundImage from '../images/hero_1.jpg'

class Home extends Component {

  render() {

    const { shopItems } = this.props.shopItems;
    
    return (
      <div>
        <div className='site-wrap'>
          <div className="site-blocks-cover" style={{backgroundImage: `url(${BackgroundImage})`}} data-aos="fade">
            <div className="container">
              <div className="row align-items-start align-items-md-center justify-content-end">
                <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
                  <h1 className="mb-2">Finding Your Perfect Shoes</h1>
                  <div className="intro-text text-center text-md-left">
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. 
                      Integer accumsan tincidunt fringilla. 
                    </p>
                    <p>
                      <Link to="/shop" className="btn btn-sm btn-primary">Shop Now</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Support />
          <Collections />
          <Carousel shopItems={shopItems}/>
          <Promos />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({shopItems}) => ({shopItems});
export default withRouter(connect(mapStateToProps)(Home));