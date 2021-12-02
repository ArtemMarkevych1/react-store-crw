import React, {useCallback} from "react";
import "./checkout-item.styles.scss"
import {useDispatch} from "react-redux";
import {clearItemFromCart} from "../../redux/cart/cart.actions";

const CheckOutItem = ({cartItem}) => {
    const dispatch = useDispatch()
    const {name, imageUrl, quantity, price} = cartItem

    const onRemove = useCallback(item => {
        dispatch(clearItemFromCart(item))
    }, [dispatch])

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => onRemove(cartItem)}>&#x2715;</div>
        </div>
    )

}

export default CheckOutItem;
