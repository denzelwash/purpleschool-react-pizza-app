import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types/product";

interface CartState {
  products: CartItem[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<number>) => {
      if (state.products.find((p) => p.id === payload)) {
        state.products.map((p) => {
          if (p.id === payload) {
            p.count++;
          }
          return p;
        });
      } else {
        state.products.push({
          id: payload,
          count: 1,
        });
      }
    },
  },
  extraReducers: () => {},
});

export default cartSlice;
export const { addProduct } = cartSlice.actions;
