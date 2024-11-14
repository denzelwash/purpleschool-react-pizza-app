import { Product } from "./product";

export interface CartItem {
  id: number;
  count: number;
}

export interface CartItemFull
  extends Omit<Product, "ingredients" | "rating">,
    Pick<CartItem, "count"> {}

export interface OrderResponse {
  id: number;
  userId: number;
  status: string;
  createdAt: string;
  data: {
    products: CartItem[];
  };
}
