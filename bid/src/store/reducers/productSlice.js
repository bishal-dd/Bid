import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    product_name: "",
    product_price: 0,
    product_time: 0,
    product_image: "",
    product_description: "",
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
