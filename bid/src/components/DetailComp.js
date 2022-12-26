import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import CountdownComp from "./CountdownComp";
import { collection, doc, updateDoc } from "firebase/firestore/lite";
import { async } from "@firebase/util";
import db from "../firebase";

export default function DetailComp() {
  const locate = useLocation();
  const product = locate.state;
  const [bidprice, setbidprice] = useState(product.product_price);
  const bidRef = useRef();

  const updateProduct = async (e) => {
    e.preventDefault();

    if (bidRef.current.value > bidprice) {
      setbidprice(bidRef.current.value);
      const productRef = doc(db, "Products", product.product_id);

      console.log(bidRef.current.value);
      console.log(productRef);

      await updateDoc(productRef, {
        product_price: bidRef.current.value,
      });
    } else {
      alert("Enter a bid that is higher than the current bid");
    }
  };
  return (
    <>
      <div class="row container">
        <div class="col mt-5 ">
          <img
            src={product.product_image}
            width="600"
            height="500"
            class="rounded-4"
          />
        </div>
        <div class="col mt-5">
          <h3>{product.product_name}</h3>
          <h4>Current Bid:{bidprice}</h4>
          <h4>
            Time remaining:
            <CountdownComp days={product.product_time} />
          </h4>
          <p>{product.product_description}</p>
          <p>
            <input
              type="number"
              class="form-control form-control-lg"
              ref={bidRef}
            />
          </p>
          <p>
            <a class="btn" onClick={updateProduct}>
              Place Bid
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
