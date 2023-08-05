import {Routes, Route, } from "react-router-dom";
import {HomePage, ProductsList, ProductDetail, Login, Register, CartPage, OrderPage, DashboardPage, PageNotFound } from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";


export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="products" element={<ProductsList/>}/>
                <Route path="products/:id" element={<ProductDetail/>}/>

                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>

                <Route path="cart" element={<ProtectedRoutes><CartPage/></ProtectedRoutes> }/>
                <Route path="order-summary" element={<ProtectedRoutes><OrderPage/></ProtectedRoutes> }/>
                <Route path="dashboard" element={<ProtectedRoutes><DashboardPage/></ProtectedRoutes> }/>

                <Route path="*" element={<PageNotFound/>}/>

            </Routes>
        </>
    )
}

    // const token = true
    // <Route path="cart" element={token? <CartPage/> : <Navigate to="/login"/>}/> 
                // we can protect our routes with just this condition setting token to either true or false but the truth is it will required us to the same token thing over and over agin