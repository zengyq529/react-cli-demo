import React from 'react'
import { Route } from 'react-router'
import SagaDemo from '../pages/sagedemo/Index'

const Layout = (props) => {
  console.log('layout')
  return (
    <div>
      layout
      <Route path='/' component={SagaDemo}></Route>
    </div>
  )
}


export default Layout