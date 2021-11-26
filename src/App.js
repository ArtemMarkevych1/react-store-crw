import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Routes} from 'react-router-dom';
import ShopPage from "./components/shop/shop.components";
import Header from "./components/header/header.component";
import SignInUpPage from "./pages/sign-in-up/sign-in-up.component";

function App() {

    return <>
        <Header/>
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/shop" element={<ShopPage/>}/>
            <Route path="sign-in" element={<SignInUpPage/>}/>
        </Routes>
    </>

}

export default App;
