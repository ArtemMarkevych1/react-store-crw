import React, {useCallback, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkout/checkout.component";

const App = () => {
    const dispatch = useDispatch()

    const currentUser = useSelector(state => selectCurrentUser(state))

    const onSetCurrentUser = useCallback(user => {
        dispatch(setCurrentUser(user))
    }, [dispatch])

    useEffect(() => {
        let unsubscribeFromAuth = null;

        unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    onSetCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            }
            onSetCurrentUser(userAuth);
        });

        return () => unsubscribeFromAuth()
    }, [onSetCurrentUser])

    return (
        <>
            <Header/>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route path="/shop" element={<ShopPage/>}/>
                <Route path="/checkout" element={<CheckoutPage/>}/>
                <Route
                    exact
                    path={currentUser ? "/" : "/signin"}
                    element={currentUser ? <HomePage/> : <SignInAndSignUpPage/>}
                />
            </Routes>
        </>
    )
}

export default App
