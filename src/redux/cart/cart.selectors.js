import {createSelector} from "reselect";

export const selectCart = state => state.cart

export const selectorItems = createSelector([selectCart], cart => cart.cartItems)

export const selectCartItemsCount = createSelector([selectCart], cart =>
    cart.cartItems.reduce((acc, value) => acc + value.quantity, 0)
)

export const selectCartTotal = createSelector([selectCart], cart =>
    cart.cartItems.reduce((acc, value) => acc + value.quantity * value.price, 0)
)

export const selectCartHidden = createSelector([selectCart], cart => cart.hidden)
