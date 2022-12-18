import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    product_name: "LED TV",
    product_price: 10000,
    product_time: 89,
    product_image: "",
    product_description: "ewklelk",
  },
  {
    product_name: "Chair",
    product_price: 6000,
    product_time: 44,
    product_image: "",
    product_description: "ewnewne",
  },
];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    show_products: (state) => {
      state.value.product_name = "LED TV";
    },
  },
});

export default productSlice.reducer;
