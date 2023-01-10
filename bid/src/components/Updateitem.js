import React, { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import db from "../firebase";
import { updateDoc, doc } from "firebase/firestore/lite";

export default function Updateitem() {
  const navigate = useNavigate();
  const locate = useLocation();
  const products = locate.state;
  const product_nameRef = useRef("");
  const product_descriptionRef = useRef("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const productname = product_nameRef.current.value;
    const productdescription = product_descriptionRef.current.value;

    try {
      if (productname !== "" && productdescription !== "") {
        await updateDoc(doc(db, "Products", products.product_id), {
          product_name: productname,
          product_description: productdescription,
        });
      } else if (productname !== "" && productdescription === "") {
        await updateDoc(doc(db, "Products", products.product_id), {
          product_name: productname,
        });
      } else {
        await updateDoc(doc(db, "Products", products.product_id), {
          product_description: productdescription,
        });
      }

      // Navigate to the home page
      navigate("/");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
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
                  class="w-75 h-75 border border-dark"
                  defaultValue={products.product_name}
                  ref={product_nameRef}
                />
              </div>
            </div>

            <div class="row" id="dechen4">
              <div class="col-sm">
                <p class="h2">Description</p>
              </div>
              <div class="col-sm">
                <textarea
                  class="w-75 h-100 border border-dark"
                  defaultValue={products.product_description}
                  name="product_description"
                  ref={product_descriptionRef}
                ></textarea>
              </div>
            </div>
          </div>

          <div class="p-3 text-center">
            <button type="submit" class="btn btn-light" id="loglink">
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
