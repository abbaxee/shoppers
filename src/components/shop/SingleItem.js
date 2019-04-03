import React from 'react'

export default ({
  item,
  quantity,
  quantityLimit,
  availableSizesQuantity,
  decrement,
  increment,
  handleQuantityInputChange,
  handleSizeChange,
  handleAddToCart
}) => {
  return (
    <div>
      <div className="site-wrap">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={item.display_src} alt={item.name} className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h2 className="text-black">{item.name}</h2>
                <p>{item.description}</p>
                <p><strong className="text-primary h4">${item.price}</strong></p>
                <p>Color: {item.color}</p>
                <div className="mb-1 d-flex">
                  <label htmlFor="option-sm" className="d-flex mr-3 mb-3">
                    <span className="d-inline-block mr-2" style={{top:-2, position: 'relative'}}>
                      <input type="radio" id="option-sm" name="shop-sizes" value="small" onChange={(e) => handleSizeChange(e, item)}/>
                    </span> 
                    <span className="d-inline-block text-black">Small</span>
                  </label>
                  <label htmlFor="option-md" className="d-flex mr-3 mb-3">
                    <span className="d-inline-block mr-2" style={{top:-2, position: 'relative'}}>
                      <input type="radio" id="option-md" name="shop-sizes" value="medium" onChange={(e) => handleSizeChange(e, item)}/>
                    </span> 
                    <span className="d-inline-block text-black">Medium</span>
                  </label>
                  <label htmlFor="option-lg" className="d-flex mr-3 mb-3">
                    <span className="d-inline-block mr-2" style={{top:-2, position: 'relative'}}><input type="radio" id="option-lg" name="shop-sizes" value="large" onChange={(e) => handleSizeChange(e, item)}/></span> <span className="d-inline-block text-black">Large</span>
                  </label>
                </div>
                <div className="mb-5">
                  <div className="input-group mb-3" style={{maxWidth: 120}}>
                    <div className="input-group-prepend">
                      <button className="btn btn-outline-primary" onClick={decrement} type="button">-</button>
                    </div>
                    <input type="text" className="form-control text-center" onChange={handleQuantityInputChange} value={ quantity } aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    <div className="input-group-append">
                      <button className="btn btn-outline-primary" onClick={increment} type="button">+</button>
                    </div>
                  </div>
                  { quantityLimit ? <code><span className='text-danger'> Only {quantityLimit} pieces can be purchased at the moment </span><br/></code> : '' }
                  <small>{availableSizesQuantity ? <span > {availableSizesQuantity} pieces available </span>: <span className="text-danger">Choose a size to see available quantity</span> }</small>
                </div>
                <p><button onClick={() => handleAddToCart() }  className="buy-now btn btn-sm btn-primary">Add To Cart</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
