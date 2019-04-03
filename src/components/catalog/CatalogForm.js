import React from 'react' 

export default ({
  title,
  item,
  handleChange,
  handleChangeSize,
  handleSubmit,
}) => {
  
  const displayProductImagePreview = (item) => {
    if (!item.display_src) return
    return <img src={item.display_src} alt="item" style={{width: 100}}/>
  }
  return (
    <div className="site-section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12 mb-5 mb-md-0">
              <h2 className="h3 mb-3 text-black">{title}</h2>
              <div className="p-3 p-lg-5 border">
                <div className="form-group row">
                  <div className="col-md-6">
                    <label className="text-black">Product Name<span className="text-danger">*</span></label>
                    <input type="text" onChange={handleChange} value={ item.name } className="form-control" name="name" required/>
                  </div>
                  <div className="col-md-6">
                    <label className="text-black">Product Category <span className="text-danger">*</span></label>
                    <select onChange={handleChange} name='category' value={ item.category } className="form-control" required>
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
                    <input type="number" onChange={handleChange} value={ item.price } className="form-control" name="price" required/>
                  </div>
                  <div className="col-md-6">
                    <label className="text-black"> Color <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" onChange={handleChange} value={ item.color } name="color" required/>   
                </div>
                </div>
                
                <div className="form-group row"> 
                  <div className="col">
                    <label className="text-black"> Product Image <span className="text-danger">*</span></label><hr/>
                    {displayProductImagePreview(item)}
                    <input type="file" onChange={handleChange} className="form-control" name="image" />
                  </div>
                </div>
                <h4 className="h3 mb-3 text-black">Product Sizes</h4>
                <div className="form-group row">
                  <div className="col-md-2">
                    <label className="text-black"> Small </label>
                    <input type="number" onChange={handleChangeSize} value={ item.quantity.small } className="form-control" name="small" placeholder="0" />   
                  </div>
                  <div className="col-md-2">
                    <label className="text-black"> medium </label>
                    <input type="number" onChange={handleChangeSize} value={item.quantity.medium} className="form-control" name="medium" placeholder="0" />   
                  </div>
                  <div className="col-md-2">
                    <label className="text-black"> Large </label>
                    <input type="number" onChange={handleChangeSize} value={item.quantity.large} className="form-control" name="large" placeholder="0" />   
                  </div>
                </div>
                  
                <div className="form-group">
                  <label  className="text-black">Product Description</label>
                  <textarea onChange={handleChange} value={ item.description } name="description" cols="30" rows="5" className="form-control" placeholder="Write details here..."></textarea>
                </div>
                <div className="form-group">
                  <input type="Submit" className="btn btn-primary btn-lg py-3 btn-block" value={title.toUpperCase()} readOnly/>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
