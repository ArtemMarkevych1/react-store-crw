import React from "react";
import SHOP_DATA from "./shop.data.js";
import CollectionPreview from "../../components/collection-preview/collection-preview";

const ShopPage = () => (
    <div className="shop-page">
        {SHOP_DATA.map(({id, ...props}) => (
            <CollectionPreview key={id} {...props} />
        ))}
    </div>
);

export default ShopPage;
