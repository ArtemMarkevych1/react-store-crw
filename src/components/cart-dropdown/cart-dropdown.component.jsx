import React from 'react';
import {useSelector} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import {selectorItems} from "../../redux/cart/cart.selectors";

const CartDropdown = () => {
    const cartItems = useSelector(state => selectorItems(state));
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default CartDropdown
