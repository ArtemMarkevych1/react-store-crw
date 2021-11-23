import React from 'react'
import {SHOP_DATA} from "./shop.data";
import PreviewCollection from "../collection-preview/collection-preview.component";

const ShopPage = () => {
    return (
        <div className="shop-page">
            {SHOP_DATA
                .filter((el, idx) => idx < 4)
                .map(({id, ...props}) => {
                    return (
                        <PreviewCollection key={id} {...props} />
                    )
                })}
        </div>
    )
}

export default ShopPage
