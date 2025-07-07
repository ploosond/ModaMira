const checkout = {
  _id: "23123",
  createdAt: new Date(),
  shippingAddress: { address: "Trifts1", city: "Kleve", country: "Germany" },
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "T-Shirt",
      color: "white",
      size: "M",
      price: 200,
      quantity: 1,
      image: "https://picsum.photos/150?random=2",
    },
  ],
};

function OrderConfirmation() {
  const calculateEstimatedDelivery = (createdAt: Date) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate;
  };

  return (
    <div className="max-w-4xl m-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-zalando mb-8">
        Thank you for Your Order!
      </h1>

      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* Estimated Delivery */}
            <div>
              <p className="text-zalando text-sm">{`Estimated Delivery: ${calculateEstimatedDelivery(
                checkout.createdAt
              ).toLocaleDateString()}`}</p>
            </div>
          </div>

          {/* Ordered Items */}
          <div className="mb-20">
            {checkout.checkoutItems.map((item, index) => (
              <div className="flex items-center mb-4" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md">€{item.price}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment and Delivery */}
          <div className="grid grid-cols-2 gap-8">
            {/* Payment */}
            <div>
              <h4 className="text-lg  font-semibold mb-2">Payment</h4>
              <p className="text-gray-600">PayPal</p>
            </div>

            {/* Delivery */}
            <div>
              <h4 className="text-lg  font-semibold mb-2">Delivery</h4>
              <p className="text-gray-600">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-600">
                {checkout.shippingAddress.city},{" "}
                {checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default OrderConfirmation;
