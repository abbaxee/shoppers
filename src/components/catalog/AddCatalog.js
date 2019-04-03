import React, { Component } from 'react';
import { addItem } from '../../reducers/shopItems'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CatalogForm from './CatalogForm';

class AddCatalog extends Component {
  
  state = {
    formData: {
      quantity:{}
    }
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'file' ? target.files[0] : target.value;
    const name = target.name;
    const {formData} = this.state;
    formData[name] = value;
    this.setState({formData});
  }

  handleChangeSize = (e) => {
    const {formData} = this.state;
    formData.quantity[e.target.name] = parseInt(e.target.value);
    this.setState({formData})
  }

  handleSubmit = (e) => {
    const item = this.state.formData;
    e.preventDefault();
    const file    = item.image;
    const reader  = new FileReader();
    
    if (file) {
      reader.readAsDataURL(file);
    }
    
    reader.onload = () => {
      item.image = reader.result
      const { addItem, history } = this.props;
      addItem(item);
      history.push('/catalog');
    }
  }

  render() { 
    const item = this.state.formData;
    return (   
      <CatalogForm 
        title='Add Catalog'
        item={item}
        handleChange={this.handleChange}
        handleChangeSize={this.handleChangeSize}
        handleSubmit={this.handleSubmit}
      />      
    );
  }
}

const mapStateToProps = ({shopItems, categories}) => ({shopItems, categories});

const mapDispachToProps = (dispatch) => {
  return bindActionCreators({ addItem }, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(AddCatalog);
