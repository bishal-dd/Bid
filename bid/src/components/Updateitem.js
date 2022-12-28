import React from "react";

export default function Updateitem() {
  return (
    <>
      <div>
        <form>
          <div class="p-3">
            <p class="h1 text-center">Update Auction Item</p>
          </div>
          <div
            class="container w-75 justify-content-center  rounded-5"
            id="box1"
          >
            <div class="row" id="dechen">
              <div class="col-sm">
                <p class="h2">Enter Product</p>
              </div>
              <div class="col-sm">
                <input
                  type="text"
                  name="product_name"
                  class="w-75 h-75"
                  //value={values.product_name}
                  // onChange={handelchange}
                  required
                />
              </div>
            </div>
            <div class="row" id="dechen1">
              <div class="col-sm">
                <p class="h2">Insert Image</p>
              </div>
              <div class="col-sm">
                <input
                  type="file"
                  class="w-75 h-75"
                  name="product_image"
                  id="file"
                  required
                  // onChange={productImgHandler}
                />
              </div>
            </div>
            <div class="row" id="dechen4">
              <div class="col-sm">
                <p class="h2">Description</p>
              </div>
              <div class="col-sm">
                <textarea
                  class="w-75 h-100"
                  //value={values.product_description}
                  // onChange={handelchange}
                  name="product_description"
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div class="p-3 text-center">
            <button type="submit" class="btn btn-light" id="loglink">
              ADD
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
