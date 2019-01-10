import React, { Component } from 'react';
import Header from './Header';
import CatalogPagination from './CatalogPagination';
import Footer from './Footer';
import { connect } from 'react-redux';
import { addCategory } from '../reducers/categories'

class AddCategory extends Component {

    nameRef = React.createRef();

    handleSubmit = (e) => {
      e.preventDefault();
      const name = this.nameRef.current.value;
      const id = Date.now();
      console.log('function', this.props.addCategory)
      this.props.addCategory(id, name);
      e.currentTarget.reset();
    }

    render() {
      return (
        <div>
          <Header name="Catalog"/>
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
                          <input type="text" ref={this.nameRef} name="name" className="form-control" required/>
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