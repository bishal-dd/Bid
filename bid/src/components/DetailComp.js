import React, { useState, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CountdownComp from "./CountdownComp";
import { deleteDoc, doc, updateDoc } from "firebase/firestore/lite";
import db from "../firebase";
import { AuthContext } from "../Context/AuthContext";
import { NumericFormat } from "react-number-format";

export default function DetailComp() {
  const { currentUser } = useContext(AuthContext);
  const locate = useLocation();
  const navigate = useNavigate();
  const product = locate.state;
  const [bidprice, setbidprice] = useState(product.product_price);
  const [bidderr, setbidder] = useState(product.bidder);
  const bidRef = useRef();

  const updateProduct = async (e) => {
    e.preventDefault();
    const countdown = document.getElementById("countdown1");
    console.log(countdown.textContent);
    if (currentUser) {
      if (countdown.textContent === "Time is up 🔥") {
        alert("the time is up");
      } else {
        if (Number(bidRef.current.value) > Number(bidprice)) {
          console.log(product.product_owner);
          console.log(currentUser.email);

          if (product.product_owner === currentUser.email) {
            alert("you cannot bid on you own product");
          } else {
            setbidprice(bidRef.current.value);
            setbidder(currentUser.email);
            const productRef = doc(db, "Products", product.product_id);

            console.log(bidRef.current.value);
            console.log(productRef);

            await updateDoc(productRef, {
              product_price: bidRef.current.value,
              bidder: currentUser.email,
            });
          }
        } else {
          alert("Enter a bid that is higher than the current bid");
        }
      }
    } else {
      alert("Please login to place a Bid");
    }
  };
  const DeleteProduct = async (e) => {
    e.preventDefault();
    await deleteDoc(doc(db, "Products", product.product_id));

    navigate("/");
  };
  return (
    <>
      <div class="container mt-5">
        <div class="row " id="detailrow">
          <div class="col-sm">
            <img
              src={product.product_image}
              class="img-fluid  rounded-4 "
              alt={product.product_name}
            />
          </div>
          <div class="col-lg p-3 border border-4 " id="detailcol">
            <h3>{product.product_name}</h3>
            <div class="h4">
              Current Bid:{" "}
              <NumericFormat
                value={bidprice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Nu."}
              />
              ({bidderr})
            </div>
            <h4>
              <span id="countdown1">
                <CountdownComp days={product.product_time} />
              </span>
            </h4>
            <p>{product.product_description}</p>
            <form onSubmit={updateProduct}>
              <p>
                <input
                  type="number"
                  class="form-control form-control-lg"
                  ref={bidRef}
                  required
                />
              </p>
              <p>
                <button class="btn">Place Bid</button>
              </p>
              <span class="ml-3">
                {currentUser && currentUser.email === product.product_owner ? (
                  <button class="btn" onClick={DeleteProduct}>
                    Delete
                  </button>
                ) : (
                  ""
                )}
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
