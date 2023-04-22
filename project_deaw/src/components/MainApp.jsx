import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { ProductsPage } from './ProductsPage'


export const MainApp = () => {
    return(
        <>
            <h1>MainApp</h1>
            <hr />
            
            <NavLink to="products/3" >Product by ID</NavLink>
            
            
            <Routes>
                <Route path=":id" element={ <ProductsPage /> } />
            </Routes>
        </>
    )
}