import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from './pages/HomePage'
import UslugiPage from './pages/UslugiPage'
import OdinarniPage from './pages/OdinarniPage'
import ProductsPage from './pages/ProductsPage'
import GalleryPage from './pages/GalleryPage'

export default function useRoutes(){
    return(
        <Switch>
            <Route path="/home" exact>
                <HomePage/>
            </Route>
            <Route path="/uslugi" exact>
                <UslugiPage/>
            </Route>
            <Route path="/pruducts" exact>
                <ProductsPage/>
            </Route>
            <Route path="/pruducts/:id" exact>
                <GalleryPage/>
            </Route>
            <Redirect to ="/home"/>
        </Switch>
    )
}
