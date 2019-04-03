import React from 'react'
import { NavLink } from 'react-router-dom';

export default ({
  name,
  link,
  exact
}) => {
    return (
      <li><NavLink exact={exact || false} to={link || `/${name}`} activeClassName='active'>{name}</NavLink></li>
    )
}
