import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

interface PayPalButtonProps {
  amount: number;
  onSuccess: (details: any) => void;
  onError: (error: unknown) => void;
}

function PaypalButton({ amount, onSuccess, onError }: PayPalButtonProps) {
  return (
    <PayPalScriptProvider
      options={{ clientId: import.meta.env.VITE_PAYPAL_CLIENTID }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              { amount: { currency_code: "USD", value: amount.toString() } },
            ],
          });
        }}
        onApprove={(data, actions) => {
          if (!actions.order) {
            onError(new Error("Order action is undefined"));
            return Promise.reject(new Error("Order action is undefined"));
          }
          return actions.order?.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
}
export default PaypalButton;
