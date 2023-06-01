import React from "react";
import {Navigate, Route,Routes} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import {RoutePaths} from "../utils/enum";
import BookListing from "../pages/BookListing";
import {useAuthContext} from "../context/auth.context"

export const MainNavigation =()=>
{
    const authContext = useAuthContext();
     const Redirect = <Navigate to ={RoutePaths.BookListing}/>
    return(
        <Routes>
            <Route exact path={RoutePaths.Login} element={<Login/>}/>
            <Route exact path={RoutePaths.Register} element={<Register/>}/>
            <Route 
            exact
            path={RoutePaths.BookListing} 
            element={authContext.user.id ? <BookListing/> : Redirect}
            />

        </Routes>
    )
}