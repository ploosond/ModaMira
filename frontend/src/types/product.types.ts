export type Size = "S" | "M" | "L" | "XL";

export interface Product {
  _id: number;
  name: string;
  price: number;
  images: Array<{
    url: string;
    altText: string;
  }>;
}

export interface ProductDetails extends Product {
  originalPrice: number;
  description: string;
  brand: string;
  materials: string;
  sizes: Array<Size>;
  colors: Array<string>;
}
