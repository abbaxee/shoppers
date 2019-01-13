import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CatalogPagination from './CatalogPagination';
import { addItem } from '../reducers/shopItems'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddCatalog extends Component {
  // TODO Remove refs from forms and replace with a local state
  nameRef = React.createRef();
  categoryRef = React.createRef();
  priceRef = React.createRef();
  //TODO colorRef = React.createRef();
  smallRef = React.createRef();
  mediumRef = React.createRef();
  largeRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  

  handleSubmit = (e) => {
    e.preventDefault();
    const file    = this.imageRef.current.files[0];
    const reader  = new FileReader();
    
    if (file) {
      reader.readAsDataURL(file);
    }
    
    reader.onload = () => {
      const item = {
        name: this.nameRef.current.value,
        category: this.categoryRef.current.value,
        price: this.priceRef.current.value,
        small: this.smallRef.current.value,
        medium: this.mediumRef.current.value,
        large: this.largeRef.current.value,
        description: this.descRef.current.value,
        image: reader.result 
      }
      const { addItem, history } = this.props;
      addItem(item);
      history.push('/catalog');
    }
  }

  render() { 
    return (
      <div>
        <Header name="Catalog"/>
        <CatalogPagination name="Add" />
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
                      <input type="text" ref={this.nameRef} className="form-control" name="name" required/>
                    </div>
                    <div className="col-md-6">
                      <label className="text-black">Product Category <span className="text-danger">*</span></label>
                      <select ref={this.categoryRef} className="form-control" required>
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
                      <input type="number" ref={this.priceRef} className="form-control" name="price" required/>
                    </div>
                    <div className="col-md-6">
                      <label className="text-black"> Color <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" name="color" required/>   
                  </div>
                  </div>
                  
                  <div className="form-group row"> 
                    <div className="col">
                      <label className="text-black"> Product Image <span className="text-danger">*</span></label>
                      <input type="file" ref={this.imageRef}  className="form-control" name="image" required/>
                    </div>
                  </div>
                  <h4 className="h3 mb-3 text-black">Product Sizes</h4>
                  <div className="form-group row">
                    <div className="col-md-2">
                      <label className="text-black"> Small </label>
                      <input type="number" ref={this.smallRef} className="form-control" name="small" placeholder="0" />   
                    </div>
                    <div className="col-md-2">
                      <label className="text-black"> medium </label>
                      <input type="number" ref={this.mediumRef} className="form-control" name="medium" placeholder="0" />   
                    </div>
                    <div className="col-md-2">
                      <label className="text-black"> Large </label>
                      <input type="number" ref={this.largeRef} className="form-control" name="large" placeholder="0" />   
                    </div>
                  </div>
                    
                  <div className="form-group">
                    <label  className="text-black">Product Description</label>
                    <textarea ref={this.descRef} name="description" cols="30" rows="5" className="form-control" placeholder="Write details here..."></textarea>
                  </div>
                  <div className="form-group">
                    <input type="Submit" className="btn btn-primary btn-lg py-3 btn-block"  value=" ADD PRODUCT" />
                  </div>
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({shopItems, categories}) => ({shopItems, categories});

const mapDispachToProps = (dispatch) => {
  return bindActionCreators({ addItem }, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(AddCatalog);
