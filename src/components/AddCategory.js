import React, { Component } from 'react';
import Header from './Header';
import CatalogPagination from './CatalogPagination';
import Footer from './Footer';
import { connect } from 'react-redux';
import { addCategory } from '../reducers/categories'

class AddCategory extends Component {

    state = {
      name: ""
    }

    handleChange = (e) => {
      this.setState({name: e.target.value})
    }
    

    handleSubmit = (e) => {
      e.preventDefault();
      const name = this.state.name;
      const id = Date.now();
      const { addCategory, history } = this.props;
      addCategory(id, name);
      history.push('/category');
    }

    render() {
      return (
        <div>
          <CatalogPagination name="AddCategory" />
          <div className="site-section">
            <div className="container">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-12 mb-5 mb-md-0">
                    <h2 className="h3 mb-3 text-black">Add Category</h2>
                    <div className="p-3 p-lg-5 border">
                      <div className="form-group row">
                        <div className="col-sm-12">
                          <label htmlFor="c_fname" className="text-black">Category Name<span className="text-danger">*</span></label>
                          <input type="text" onChange={this.handleChange} value={this.state.value} name="name" className="form-control" required/>
                        </div>
                      </div>
                      <div className="form-group">
                        <input type="Submit" className="btn btn-primary btn-lg py-3 btn-block" />
                      </div>
                    </div>
                  </div>
                </div>
                </form>
              </div>
            </div>
          <Footer/>
        </div>
      );
   }
}

export default connect(null, {addCategory})(AddCategory);