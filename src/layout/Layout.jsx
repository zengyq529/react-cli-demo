import React from 'react'
import { Route } from 'react-router'
import DemoPage from '../pages/demopage/Index'

const Layout = (props) => {
  console.log('layout')
  return (
    <div>
      layout
      <Route path='/' component={DemoPage}></Route>
    </div>
  )
}


export default Layout