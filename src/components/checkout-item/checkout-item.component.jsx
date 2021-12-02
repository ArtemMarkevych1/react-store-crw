import React, {useCallback} from "react";
import "./checkout-item.styles.scss"
import {useDispatch} from "react-redux";
import {addItem, clearItemFromCart, removeItem} from "../../redux/cart/cart.actions";

const CheckOutItem = ({cartItem}) => {
    const dispatch = useDispatch()
    const {name, imageUrl, quantity, price} = cartItem

    const onRemove = useCallback(item => {
        dispatch(clearItemFromCart(item))
    }, [dispatch])

    const onAddItemCount = useCallback(item => {
        dispatch(addItem(item))
    }, [dispatch])

    const onRemoveItemCount = useCallback(item => {
        dispatch(removeItem(item))
    }, [dispatch])

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => {
                    onRemoveItemCount(cartItem)
                }}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => {
                    onAddItemCount(cartItem)
                }}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => onRemove(cartItem)}>&#x2715;</div>
        </div>
    )
}

export default CheckOutItem;
