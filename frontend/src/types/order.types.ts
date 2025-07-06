export interface Order {
  _id: string;
  createdAt: Date;
  shippingAddress: { city: string; country: string };
  orderItems: [
    {
      name: string;
      iamge: string;
    }
  ];
  totalPrice: number;
  isPaid: boolean;
}
