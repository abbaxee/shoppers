import React, { Component } from 'react';
import { editItem } from '../reducers/shopItems'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class EditCatalog extends Component {

  state = {
    formData: {...this.props.shopItems.shopItems[this.props.location.state]}
  }

  handleChange = (value, field) => {
    const formData = this.state.formData;
    formData[field] = value;
    this.setState({formData})

  }

  handleChangeSize = (value, field) => {
    const formData = this.state.formData;
    formData.quantity[field] = value;
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
      <div>
        <div className="site-section">
          <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-12 mb-5 mb-md-0">
                <h2 className="h3 mb-3 text-black">Edit Product</h2>
                <div className="p-3 p-lg-5 border">
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label className="text-black">Product Name<span className="text-danger">*</span></label>
                      <input type="text" onChange={(e) => this.handleChange(e.target.value, 'name')} value={item.name} className="form-control" name="name" required/>
                    </div>
                    <div className="col-md-6">
                      <label className="text-black">Product Category <span className="text-danger">*</span></label>
                      <select onChange={(e) => this.handleChange(e.target.value, 'category')} value={item.category} className="form-control" required>
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
                      <input type="number" onChange={(e) => this.handleChange(parseFloat(e.target.value), 'price')} value={item.price} className="form-control" name="price" required/>
                    </div>
                    <div className="col-md-6">
                      <label className="text-black"> Color <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" onChange={(e) => this.handleChange(e.target.value, 'color')} value={item.color} name="color" required/>   
                  </div>
                  </div>
                  
                  <div className="form-group row"> 
                    <div className="col">
                      <label className="text-black"> Product Image <span className="text-danger">*</span></label><hr/>
                      <img src={item.display_src} alt="item" style={{width: 100}}/>
                      <input type="file" onChange={(e) => this.handleChange(e.target.files[0], 'image')} className="form-control" name="image" />
                    </div>
                  </div>
                  <h4 className="h3 mb-3 text-black">Product Sizes</h4>
                  <div className="form-group row">
                    <div className="col-md-2">
                      <label className="text-black"> Small </label>
                      <input type="number" onChange={(e) => this.handleChangeSize(parseInt(e.target.value), 'small')} value={item.quantity.small} className="form-control" name="small" placeholder="0" />   
                    </div>
                    <div className="col-md-2">
                      <label className="text-black"> medium </label>
                      <input type="number" onChange={(e) => this.handleChangeSize(parseInt(e.target.value), 'medium')} value={item.quantity.medium} className="form-control" name="medium" placeholder="0" />   
                    </div>
                    <div className="col-md-2">
                      <label className="text-black"> Large </label>
                      <input type="number" onChange={(e) => this.handleChangeSize(parseInt(e.target.value), 'large')} value={item.quantity.large} className="form-control" name="large" placeholder="0" />   
                    </div>
                  </div>
                    
                  <div className="form-group">
                    <label  className="text-black">Product Description</label>
                    <textarea onChange={(e) => this.handleChange(e.target.value, 'description')} value={item.description} name="description" cols="30" rows="5" className="form-control" placeholder="Write details here..."></textarea>
                  </div>
                  <div className="form-group">
                    <input type="Submit" className="btn btn-primary btn-lg py-3 btn-block" value="EDIT PRODUCT" readOnly/>
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
  return bindActionCreators({ editItem }, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(EditCatalog);
