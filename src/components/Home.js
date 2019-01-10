import React, { Component } from 'react'

//Import Components
import Header from './Header';
import Cover from './Cover';
import Support from './Support';
import Collections from './Collections';
import Carousel from './Carousel';
import Promos from './Promos';
import Footer from './Footer';
import { connect } from 'react-redux';


class Home extends Component {

  render() {

    const { shopItems } = this.props.shopItems;
    
    return (
      <div>
        <div className='site-wrap'>
          <Header name='Home'/>
          <Cover />
          <Support />
          <Collections />
          <Carousel shopItems={shopItems}/>
          <Promos />
          <Footer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({shopItems}) => ({shopItems});
export default connect(mapStateToProps)(Home);