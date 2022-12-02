import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {

    const { cartItems } = useContext(CartContext);

    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>Product</div>
                <div className='header-block'>Description</div>
                <div className='header-block'>Quantity</div>
                <div className='header-block'>Price</div>
                <div className='header-block'>Remove</div>
            </div>
            { cartItems.length ? (
                cartItems.map((cartItem) => (
                  <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))

              ) : (
                <span className='empty-message'>Your cart is empty</span>
              )}
              <span className='Total'>Total: €{cartItems.reduce(
                (total, cartItem) => total + (cartItem.quantity*cartItem.price), 0)}
              </span> 

        
        </div>

    )

} 

export default Checkout;