import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
    const dispatch = useDispatch()

    const onToggleCartHidden = useCallback(() => {
        dispatch(toggleCartHidden())
    }, [dispatch])

    return (
        <div className="cart-icon" onClick={onToggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )

};

export default CartIcon;
