import React, {useEffect, useState} from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Routes} from 'react-router-dom';
import ShopPage from "./components/shop/shop.components";
import Header from "./components/header/header.component";
import SignInUpPage from "./pages/sign-in-up/sign-in-up.component";
import {auth} from "./firebase/firebase.utils";

function App() {

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        let unsubscribeFromAuth = null
        unsubscribeFromAuth = auth.onAuthStateChanged(user => setCurrentUser(user))
        return () => unsubscribeFromAuth()
    }, [currentUser])

    return <>
        <Header currentUser={currentUser}/>
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/shop" element={<ShopPage/>}/>
            <Route path="/sign-in" element={<SignInUpPage/>}/>
        </Routes>
    </>
}

export default App;