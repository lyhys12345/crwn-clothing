import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price })=>{
    const PriceForStripe = price * 100 ; //conver USD to cents
    const publishableKey = 'pk_test_51HHQaXD7R6eZHP1qzYh5jOD7Cf4GrbL7CNiQwyLfNekPxcQKmQ3to59YnWYXD2PuEpcOSffUGVTxDQv9vqpohyWv00rsWQVWRi';

    const onToken = token =>{
        console.log(token);
        alert('payment successful!');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            shippingAddress
            billingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            alipay
            amount={PriceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )

};

export default StripeCheckoutButton;

