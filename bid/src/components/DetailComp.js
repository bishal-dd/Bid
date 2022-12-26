import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import CountdownComp from "./CountdownComp";

export default function DetailComp() {
  const locate = useLocation();
  const product = locate.state;
  const [bidprice, setbidprice] = useState(product.product_price);
  const bidRef = useRef();
  const [show, setshow] = useState(false);

  setshow(false);
  setbidprice(bidRef.current.value);

  return (
    <>
      <div class="row container">
        <div class="col">
          <img src={product.product_image} width="600" height="500" />
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
            <input type="number" />
          </p>
          <p>
            <a class="btn" onClick={handelShow}>
              Place Bid
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
