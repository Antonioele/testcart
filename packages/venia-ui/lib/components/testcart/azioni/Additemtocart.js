import React , {Fragment,useEffect,useState,useCallback,useReducer} from 'react';
import { useCartContext } from '@magento/peregrine/lib/context/cart';
import defaultClasses from './additem.css';
const Additemtocart = () =>
{
    const [
        cartState,
        { updateItemInCart, removeItemFromCart }
    ] = useCartContext();
 console.log(`stato cart ${cartState}`);
// console.log(`cartid: ${cartId}`); 

/*
    const { item, productType, quantity } = payload;

    const cartItem = {
        qty: quantity,
        sku: item.sku,
        name: item.name,
        quote_id: cartId
    };

    if (productType === 'ConfigurableProduct') {
        const { options, parentSku } = payload;

        cartItem.sku = parentSku;
        cartItem.product_type = 'configurable';
        cartItem.product_option = {
            extension_attributes: {
                configurable_item_options: options
            }
        };
    }

    
    */

   const [cartItem,setcartitem]=useState({qty:1,sku:100,name:"WS12-M-Orange",cart:"10"});
   const handlechange = () => {setcartitem({qty:10,sku:200})};
   const {sku}= cartItem;
   
   console.log(`cartitem${sku}`);
return (
    <>
<button className={defaultClasses.bottone} onClick={handlechange}>click</button>
<h2>  {sku} </h2>

<h2 className={defaultClasses.title}>  Add item to cart</h2>
</>
);

}
export default Additemtocart;