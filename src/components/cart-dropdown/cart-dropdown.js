import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item';
import { CustomButton } from '../custom-button/custom-button';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    cartItems,
  };
};

export default connect(mapStateToProps)(CartDropdown);
