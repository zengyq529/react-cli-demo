

import Layout from '@/layout/Layout'
import DemoPage from '../pages/demopage/Index'
export default [
  {
    path: '/',
    component: Layout,
    routes: [
      { path: '/demopage', component: DemoPage },
    ]
  }
]