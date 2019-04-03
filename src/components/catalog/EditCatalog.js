import React, { Component } from 'react';
import { editItem } from '../../reducers/shopItems'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CatalogForm from './CatalogForm'

class EditCatalog extends Component {

  state = {
    formData: {...this.props.shopItems.shopItems[this.props.location.state]}
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
    const { editItem, history } = this.props;
    const item = this.state.formData;
    const index = this.props.location.state;
    
    e.preventDefault();
    const file    = item.image;
    const reader  = new FileReader();
    
    if (file) {
      reader.readAsDataURL(file);
        reader.onload = () => {
        item.display_src = reader.result
        editItem(item, index);
        history.push('/catalog');
        }
    }
    editItem(item, index)
    history.push('/catalog'); 
  }

  render() { 
    const item = this.state.formData;
    return (  
      <CatalogForm
        title='Edit Catalog'
        item={item}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleChangeSize={this.handleChangeSize}
      />      
    );
  }
}

const mapStateToProps = ({shopItems, categories}) => ({shopItems, categories});

const mapDispachToProps = (dispatch) => {
  return bindActionCreators({ editItem }, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(EditCatalog);
