import React, { useState, useRef, useContext } from "react";
import { useLocation } from "react-router-dom";
import CountdownComp from "./CountdownComp";
import { doc, updateDoc } from "firebase/firestore/lite";
import db from "../firebase";
import { AuthContext } from "../Context/AuthContext";

export default function DetailComp() {
  const { currentUser } = useContext(AuthContext);
  const locate = useLocation();
  const product = locate.state;
  const [bidprice, setbidprice] = useState(product.product_price);
  const [bidderr, setbidder] = useState(product.bidder);
  const bidRef = useRef();

  const updateProduct = async (e) => {
    e.preventDefault();

    if (Number(bidRef.current.value) > Number(bidprice) && currentUser) {
      setbidprice(bidRef.current.value);
      setbidder(currentUser.email);
      const productRef = doc(db, "Products", product.product_id);

      console.log(bidRef.current.value);
      console.log(productRef);

      await updateDoc(productRef, {
        product_price: bidRef.current.value,
        bidder: currentUser.email,
      });
    } else {
      alert("Enter a bid that is higher than the current bid or Login");
    }
  };
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col mt-5 ">
            <img
              src={product.product_image}
              class="img-fluid  rounded-4 "
              alt={product.product_name}
              id="detailimg"
            />
          </div>
          <div class="col mt-5">
            <h3>{product.product_name}</h3>
            <h4>
              Current Bid:{bidprice} ({bidderr})
            </h4>
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
      </div>
    </>
  );
}
