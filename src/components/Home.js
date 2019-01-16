import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

//Import Components
import Cover from './Cover';
import Support from './Support';
import Collections from './Collections';
import Carousel from './Carousel';
import Promos from './Promos';
import { connect } from 'react-redux';


class Home extends Component {

  render() {

    const { shopItems } = this.props.shopItems;
    
    return (
      <div>
        <div className='site-wrap'>
          <Cover />
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