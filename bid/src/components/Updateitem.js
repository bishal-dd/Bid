import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import db from "../firebase";
import { updateDoc, doc } from "firebase/firestore/lite";

export default function Updateitem() {
  const navigate = useNavigate();
  const locate = useLocation();
  const products = locate.state;

  const [values, setValues] = useState({
    product_name: "",
    product_description: "",
  });

  const handelchange = (e) => {
    setValues({
      ...values,
      [e.currentTarget.name]: [e.currentTarget.value],
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (values.product_name !== "" && values.product_description !== "") {
        await updateDoc(doc(db, "Products", products.product_id), {
          product_name: values.product_name,
          product_description: values.product_description,
        });
      } else if (
        values.product_name !== "" &&
        values.product_description === ""
      ) {
        await updateDoc(doc(db, "Products", products.product_id), {
          product_name: values.product_name,
        });
      } else {
        await updateDoc(doc(db, "Products", products.product_id), {
          product_description: values.product_description,
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
                  class="w-75 h-75"
                  value={values.product_name}
                  onChange={handelchange}
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
                  value={values.product_description}
                  onChange={handelchange}
                  name="product_description"
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
