import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container ${BUTTON_TYPE_CLASSES[buttonType]}'>
            <div className='cart-items' />
            <Button>GO TO CHECOUT</Button>
        </div>
    )
}


export default CartDropdown;
