import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51II3ByDmznwry1mPYdGoG7SKsYHzQG0HILJhVArXoopYfE9gvXXitoYaq4XwwffevsPRngXRuLAkVWOgoSVKevZD00gsRYz0Vv';
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(response => {
        alert('Payment Successful');
      })
      .catch(error => {
        console.log('Payment error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please be sure that you used the provided credit card information.'
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Gangsta Clothing K.K."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
