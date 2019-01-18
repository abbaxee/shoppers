import React, { Component } from 'react';
import { addItem } from '../reducers/shopItems'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddCatalog extends Component {
  
  state = {
    form: {}
  }

  handleChange = (value, field) => {
    const form = this.state.form;
    form[field] = value;
    this.setState({form})
  }

  handleSubmit = (e) => {
    const item = this.state.form;
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
    return (
      <div>
        <div className="site-section">
          <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-12 mb-5 mb-md-0">
                <h2 className="h3 mb-3 text-black">Add Product</h2>
                <div className="p-3 p-lg-5 border">
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label className="text-black">Product Name<span className="text-danger">*</span></label>
                      <input type="text" onChange={(e) => this.handleChange(e.target.value, 'name')} className="form-control" name="name" required/>
                    </div>
                    <div className="col-md-6">
                      <label className="text-black">Product Category <span className="text-danger">*</span></label>
                      <select onChange={(e) => this.handleChange(e.target.value, 'category')} className="form-control" required>
                        <option value="">Select a Category</option>    
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>    
                        <option value="Children">Children</option>    
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label className="text-black"> Price <span className="text-danger">*</span></label>
                      <input type="number" onChange={(e) => this.handleChange(e.target.value, 'price')} className="form-control" name="price" required/>
                    </div>
                    <div className="col-md-6">
                      <label className="text-black"> Color <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" onChange={(e) => this.handleChange(e.target.value, 'color')} name="color" required/>   
                  </div>
                  </div>
                  
                  <div className="form-group row"> 
                    <div className="col">
                      <label className="text-black"> Product Image <span className="text-danger">*</span></label>
                      <input type="file" onChange={(e) => this.handleChange(e.target.files[0], 'image')} className="form-control" name="image" required/>
                    </div>
                  </div>
                  <h4 className="h3 mb-3 text-black">Product Sizes</h4>
                  <div className="form-group row">
                    <div className="col-md-2">
                      <label className="text-black"> Small </label>
                      <input type="number" onChange={(e) => this.handleChange(e.target.value, 'small')} className="form-control" name="small" placeholder="0" />   
                    </div>
                    <div className="col-md-2">
                      <label className="text-black"> medium </label>
                      <input type="number" onChange={(e) => this.handleChange(e.target.value, 'medium')} className="form-control" name="medium" placeholder="0" />   
                    </div>
                    <div className="col-md-2">
                      <label className="text-black"> Large </label>
                      <input type="number" onChange={(e) => this.handleChange(e.target.value, 'large')} className="form-control" name="large" placeholder="0" />   
                    </div>
                  </div>
                    
                  <div className="form-group">
                    <label  className="text-black">Product Description</label>
                    <textarea onChange={(e) => this.handleChange(e.target.value, 'description')} name="description" cols="30" rows="5" className="form-control" placeholder="Write details here..."></textarea>
                  </div>
                  <div className="form-group">
                    <input type="Submit" className="btn btn-primary btn-lg py-3 btn-block" value="ADD PRODUCT" readOnly/>
                  </div>
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({shopItems, categories}) => ({shopItems, categories});

const mapDispachToProps = (dispatch) => {
  return bindActionCreators({ addItem }, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(AddCatalog);
