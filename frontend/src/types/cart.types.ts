type Size = "S" | "M" | "L";

export interface CartContent {
  productionId: number;
  name: string;
  size: Size;
  color: string;
  quantity: number;
  price: number;
  image: string;
}

export interface CheckoutCart {
  products: Array<CartContent>;

  totalPrice: number;
}
