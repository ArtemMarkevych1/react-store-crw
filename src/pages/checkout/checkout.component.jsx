import React from "react"
import "./checkout.styles.scss"
import {selectCartTotal, selectorItems} from "../../redux/cart/cart.selectors";
import {useSelector} from "react-redux";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = () => {
    const cartItems = useSelector(state => selectorItems(state))
    const cartTotal = useSelector(state => selectCartTotal(state))

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => <CheckOutItem cartItem={cartItem} key={cartItem.id}/>)}
            <div className="total">
                <span>
                    TOTAL: ${cartTotal}
                </span>
            </div>
        </div>
    )

}


export default CheckoutPage
