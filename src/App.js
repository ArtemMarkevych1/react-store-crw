import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Routes} from 'react-router-dom';
import ShopPage from "./components/shop/shop.components";
import Header from "./components/header/header.component";

function App() {

    return <>
        <Header/>
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/shop" element={<ShopPage/>}/>
        </Routes>
    </>

}

export default App;
