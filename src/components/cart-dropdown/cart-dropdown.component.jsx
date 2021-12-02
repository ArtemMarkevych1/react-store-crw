import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import {selectorItems} from "../../redux/cart/cart.selectors";
import {useNavigate} from "react-router-dom";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartDropdown = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cartItems = useSelector(state => selectorItems(state));

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ? cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} cartItem={cartItem}/>
                )): <span className="empty-message">Your cart is empty</span>}
            </div>
            <CustomButton onClick={()=> {
                dispatch(toggleCartHidden())
                navigate("/checkout")
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default CartDropdown
