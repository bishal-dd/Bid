import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore/lite";

export default function AdditemComp() {
  const navigate = useNavigate();
  const [image, setimgae] = useState();

  const [values, setValues] = useState({
    product_name: "",
    product_price: "",
    product_time: "",
    product_description: "",
  });

  const handelchange = (e) => {
    setValues({
      ...values,
      [e.currentTarget.name]: [e.currentTarget.value],
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    try {
      addDoc(collection(db, "Products"), {
        product_name: values.product_name,
        product_price: values.product_price,
        product_time: values.product_time,
        product_description: values.product_description,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setValues({
      product_name: "",
      product_price: "",
      product_time: "",
      product_description: "",
    });
    navigate("/");
  };

  return (
    <>
      <div>
        <form>
          <div class="p-3">
            <p class="h1 text-center">Auction</p>
          </div>
          <div class="container justify-content-center  rounded-5" id="box1">
            <div class="row" id="dechen">
              <div class="col">
                <p class="h2">Enter Product</p>
              </div>
              <div class="col">
                <input
                  type="text"
                  name="product_name"
                  class="additemtexbox"
                  value={values.product_name}
                  onChange={handelchange}
                />
              </div>
            </div>
            <div class="row" id="dechen1">
              <div class="col">
                <p class="h2">Insert Image</p>
              </div>
              <div class="col">
                <input type="file" class="additemtexbox" name="product_image" />
              </div>
            </div>
            <div class="row" id="dechen2">
              <div class="col">
                <p class="h2">Enter Price</p>
              </div>
              <div class="col">
                <input
                  type="text"
                  class="additemtexbox"
                  onChange={handelchange}
                  name="product_price"
                />
              </div>
            </div>
            <div class="row" id="dechen3">
              <div class="col">
                <p class="h2">Days Available</p>
              </div>
              <div class="col">
                <input
                  type="number"
                  class="additemtexbox"
                  value={values.product_time}
                  onChange={handelchange}
                  name="product_time"
                  placeholder="0"
                />
              </div>
            </div>
            <div class="row" id="dechen4">
              <div class="col">
                <p class="h2">Description</p>
              </div>
              <div class="col">
                <textarea
                  cols="30"
                  rows="5"
                  value={values.product_description}
                  onChange={handelchange}
                  name="product_description"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="p-3 text-center">
            <a class="btn btn-light" id="loglink" onClick={onSubmit}>
              ADD
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
