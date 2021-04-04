import React from 'react'
import useRoutes from './routes'
import Navibar from './components/Navibar'
import {BrowserRouter as Router} from 'react-router-dom'
import CustomBreadcrumb from './components/BreadCrumb'

function App() {

  const routes = useRoutes()

  return (
    <Router>
      <Navibar/>
      <CustomBreadcrumb />
      {routes}
    </Router>
  )
}

export default App
