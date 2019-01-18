import React from 'react'
import person_1 from '../images/person_1.jpg';
import person_2 from '../images/person_2.jpg';
import person_3 from '../images/person_3.jpg';
import person_4 from '../images/person_4.jpg';


export default () => {
  return (
    <div>
      <div className="site-section border-bottom" data-aos="fade">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 site-section-heading text-center pt-4">
              <h2>The Team</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="block-38 text-center">
                <div className="block-38-img">
                  <div className="block-38-header">
                    <img src={ person_1 } alt="" className="mb-4" />
                    <h3 className="block-38-heading h4">Elizabeth Graham</h3>
                    <p className="block-38-subheading">CEO/Co-Founder</p>
                  </div>
                  <div className="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="block-38 text-center">
                <div className="block-38-img">
                  <div className="block-38-header">
                    <img src={ person_2 }  alt="" className="mb-4" />
                    <h3 className="block-38-heading h4">Jennifer Greive</h3>
                    <p className="block-38-subheading">Co-Founder</p>
                  </div>
                  <div className="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="block-38 text-center">
                <div className="block-38-img">
                  <div className="block-38-header">
                    <img src={ person_3 }  alt="" className="mb-4" />
                    <h3 className="block-38-heading h4">Patrick Marx</h3>
                    <p className="block-38-subheading">Marketing</p>
                  </div>
                  <div className="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="block-38 text-center">
                <div className="block-38-img">
                  <div className="block-38-header">
                    <img src={ person_4 }alt="" className="mb-4" />
                    <h3 className="block-38-heading h4">Mike Coolbert</h3>
                    <p className="block-38-subheading">Sales Manager</p>
                  </div>
                  <div className="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
