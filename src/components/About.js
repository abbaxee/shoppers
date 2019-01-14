import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Support from './Support';
import Pagination from './Pagination';
import Team from './Team';

import blog_1 from '../images/blog_1.jpg'

class About extends Component {
  render() {
    return (
      <div className="site-wrap">
        <Pagination name='About' />

        <div className="site-section border-bottom" data-aos="fade">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-6">
                <div className="block-16">
                  <figure>
                    <img src={ blog_1 } alt="" className="img-fluid rounded" />
                    <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo"><span className="ion-md-play"></span></a>

                  </figure>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5">
                
                
                <div className="site-section-heading pt-3 mb-4">
                  <h2 className="text-black">How We Started</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellat, dicta at laboriosam, nemo exercitationem itaque eveniet architecto cumque, deleniti commodi molestias repellendus quos sequi hic fugiat asperiores illum. Atque, in, fuga excepturi corrupti error corporis aliquam unde nostrum quas.</p>
                <p>Accusantium dolor ratione maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem in, quibusdam cumque recusandae, laudantium minima repellendus.</p>
                
              </div>
            </div>
          </div>
        </div>
        <Team/>
        <Support/>
        <Footer />
      </div>
    );
  }
}

export default About;
