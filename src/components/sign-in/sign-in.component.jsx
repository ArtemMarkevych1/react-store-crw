import React, {useState} from 'react'
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";

const SignIn = () => {
    const [{email, password}, setState] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        setState({
            email: "",
            password: ""
        })
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput type="email"
                       name="email"
                       value={email}
                       label="email"
                       handleChange={handleChange}
            />
            <label>Email</label>

            <FormInput type="password"
                       name="password"
                       value={password}
                       label="password"
                       handleChange={handleChange}
            />

            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle}>Sign in with google</CustomButton>
        </form>
    </div>

}

export default SignIn
