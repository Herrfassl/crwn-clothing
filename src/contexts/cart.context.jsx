import { createContext, useState } from 'react';

import CART from '../cart-data.json';

export const CartContext = createContext ({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cart: [],
})

export const  CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen};



    return (
        <CartContext.Provider value={value}> {children}</CartContext.Provider>
    )
}