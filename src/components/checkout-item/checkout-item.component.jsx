import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, reduceItemInCart, removeItemFromCart } = useContext(CartContext)

  const addProductToCart = () => {
    addItemToCart(cartItem)
};
  const removeProductFromCart = () => {
    reduceItemInCart(cartItem)
};
  const removeItem = () => {
    removeItemFromCart(cartItem)
};


  return (

    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <div className='name'>{name}</div>

      <div className='quantity'>
        <div className='arrow' onClick={removeProductFromCart}>&#10094;</div>
        <div className='value'>{quantity}</div>
        <div className='arrow' onClick={addProductToCart}>&#10095;</div>
      </div>
      <div className='price'>{price*quantity}</div>
      <div className='remove-button' onClick={removeItem}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
