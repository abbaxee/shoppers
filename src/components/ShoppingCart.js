import React from 'react'
import { Link } from 'react-router-dom';

export default (props) => {

  const cartTotal = () => {
    let total = 0
      for (let i = 0; i < props.cart.length; i++) {
        total += parseFloat(props.cart[i].totalPrice);
      }
    return total;
  }
  
  return (
    <div>
      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  
                  {
                    props.cart.map( item => {
                      return(
                        <tbody> 
                          <tr>
                            <td className="product-thumbnail">
                              <img src={item.image} alt="" className="img-fluid" />
                            </td>
                            <td className="product-name">
                              <h2 className="h5 text-black">{item.name}</h2>
                            </td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td>${item.totalPrice}</td>
                            <td><button href="/" className="btn btn-primary btn-sm">X</button></td>
                          </tr>
                        </tbody>
                      )
                    })
                  }
                  
                </table>
              </div>
            </form>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6">
                  <Link to='/shop'className="btn btn-outline-primary btn-sm btn-block">Continue Shopping</Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="text-black h4" htmlFor="coupon">Coupon</label>
                  <p>Enter your coupon code if you have one.</p>
                </div>
                <div className="col-md-8 mb-3 mb-md-0">
                  <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                </div>
                <div className="col-md-4">
                  <button className="btn btn-primary btn-sm">Apply Coupon</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">${cartTotal()}</strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">${cartTotal()}</strong>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <button className="btn btn-primary btn-lg py-3 btn-block" >Proceed To Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
