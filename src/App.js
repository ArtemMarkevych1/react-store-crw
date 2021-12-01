import React, {useCallback, useEffect} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

const App = () => {
    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.user.currentUser)

    const setCurrentUser = useCallback(user => {
        dispatch(setCurrentUser(user))
    }, [dispatch])

    useEffect(() => {
        let unsubscribeFromAuth = null;

        unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            }
            setCurrentUser(userAuth);
        });

        return () => unsubscribeFromAuth()
    }, [setCurrentUser])

    return (
        <>
            <Header/>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route path="/shop" element={<ShopPage/>}/>
                <Route
                    exact
                    path="/signin"
                    render={() => currentUser ? (
                        <Navigate to="/"/>
                    ) : (
                        <SignInAndSignUpPage/>
                    )
                    }
                />
            </Routes>
        </>
    )
}

export default App
