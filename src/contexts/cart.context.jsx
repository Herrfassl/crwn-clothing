import { createContext, useState, useEffect } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const reduceCartItem = (cartItems, cardItemToRemove) => {

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cardItemToRemove.id
  );

  if (existingCartItem.quantity ===1){
    return cartItems.filter((cartItem) => cartItem.id !== cardItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
      cartItem.id === cardItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

 
};

export const removeCartItem = (cartItems, productToRemove) =>{
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  reduceItemInCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity, 0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));
  const reduceItemInCart = (product) =>
    setCartItems(reduceCartItem(cartItems, product));
  const removeItemFromCart = (product) =>
    setCartItems(removeCartItem(cartItems, product));

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    reduceItemInCart,
    removeItemFromCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
