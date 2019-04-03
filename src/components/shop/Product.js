import React from 'react'
import { Link } from 'react-router-dom';

export default ({
  item,
  index
}) => {
  return (
    <div key={index} className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
      <div className="block-4 text-center border">
        <figure className="block-4-image">
          <Link to={{pathname: "/shop/"+item.id, state: index}}><img src={ item.display_src } alt={item.name} className="img-fluid" /></Link>
        </figure>
        <div className="block-4-text p-4">
          <h3><Link to={{pathname: "/shop/"+item.id, state: index}}>{item.name}</Link></h3>
          <p className="mb-0">Finding perfect product</p>
          <p className="text-primary font-weight-bold">${item.price}</p>
        </div>
      </div>
    </div> 
  )
}
