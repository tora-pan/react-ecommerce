import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  //stripe needs values in cents
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JZ5o9HbvcEEntPS0vnlLJvTQQeIJBF82itJCWcpY26MxkRJWjShPL8VZXsX37oSlUe2ctOQp7tYWdiOnsyt5OUr00Hut6iC6N";

  const onToken = (token) => {
    alert("payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Pandos Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
