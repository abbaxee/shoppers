import React, { Fragment } from 'react'
import SiteNavLink from './SiteNavLink';

export default () => {
  return (
    <Fragment>
      <SiteNavLink exact name='home' link='/' />
      <SiteNavLink name='shop' />
      <SiteNavLink name='category'/>
      <SiteNavLink name='catalog'/>
      <SiteNavLink name='about'/>
      <SiteNavLink name='contact'/>
    </Fragment>
  )
}
