import React from "react";
import "./custom-buttom.styles.scss";

const CustomButton = ({
                          children,
                          isGoogleSignIn,
                          inverted,
                          ...props
                      }) => (
    <button
        className={`${inverted ? "inverted" : ""} ${
            isGoogleSignIn ? "google-sign-in" : ""
        } custom-button`}
        {...props}
    >
        {children}
    </button>
);

export default CustomButton;
