export interface Product {
  id: number;
  name: string;
  price: number;
  ingredients: string[];
  image: string;
  rating: number;
}

export interface CartItem {
  id: number;
  count: number;
}

export interface CartItemFull
  extends Omit<Product, "ingredients" | "rating">,
    Pick<CartItem, "count"> {}
