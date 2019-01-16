import React from 'react'
import OwlCarousel from 'react-owl-carousel';

import { Link } from 'react-router-dom'

export default (props) => {
  const featured =  props.shopItems.filter(item => item.isFeatured === true);
  return (
    <div>
      <div className="site-section block-3 site-blocks-2 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 site-section-heading text-center pt-4">
              <h2>Featured Products</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel
              className="owl-theme"
              center = { false }
              items = {1}
              loop = {false}
              stagePadding = {15}
              margin = {20}
              nav = { true }
              navText = {['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']}
              responsive = {{
                600:{
                  margin: 20,
                  items: 2
                },
                1000:{
                  margin: 20,
                  items: 3
                },
                1200:{
                  margin: 20,
                  items: 3
                }
                }}
              >

                {
                 featured.map(item => {
                    return(
                      <div key={item.id} className="item">
                        <div className="block-4 text-center">
                          <figure className="block-4-image">
                            <img src={ item.display_src } alt="" className="img-fluid" />
                          </figure>
                          <div className="block-4-text p-4">
                            <h3><Link to={"/shop/"+item.id}>{item.name}</Link></h3>
                            <p className="mb-0">Finding perfect t-shirt</p>
                            <p className="text-primary font-weight-bold">$50</p>
                          </div>
                        </div>
                      </div>
                    )}
                  )}
 
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
