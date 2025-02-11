import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types/cart";
import loadState from "../../utils/loadState";

interface CartState {
  products: CartItem[];
}

const initialState: CartState = {
  products: loadState<CartItem[]>("cart") ?? [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<number>) => {
      const item = state.products.find((p) => p.id === payload);
      if (item) {
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
    removeProduct: (state, { payload }: PayloadAction<number>) => {
      const item = state.products.find((p) => p.id === payload);
      if (item) {
        if (item.count === 1) {
          state.products = state.products.filter((p) => p.id !== payload);
        } else {
          state.products.map((p) => {
            if (p.id === payload) {
              p.count--;
            }
            return p;
          });
        }
      }
    },
    clearProduct: (state, { payload }: PayloadAction<number>) => {
      state.products = state.products.filter((p) => p.id !== payload);
    },
    clearAllProducts: (state) => {
      state.products = [];
    },
  },
});

export default cartSlice;
export const { addProduct, removeProduct, clearProduct, clearAllProducts } =
  cartSlice.actions;
