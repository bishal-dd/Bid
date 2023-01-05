import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db, { getProducts } from "../firebase";
import { NumericFormat } from "react-number-format";
import { AuthContext } from "../Context/AuthContext";

export default function HomeComp() {
  const { currentUser } = useContext(AuthContext);

  const [productList, setproductList] = useState([]);

  useEffect(() => {
    getProducts(db).then((a) => {
      setproductList(a);
    });
  }, []);

  return (
    <>
      <div class="row mt-4" id="mainrow">
        {productList.map((products) => (
          <div class="col mt-5">
            <div class="card">
              <img
                src={products.product_image}
                class="img-fluid w-100 h-100 card-img-top"
                height="200"
                alt="..."
              />

              <div class="card-body">
                <h5 class="card-title">{products.product_name}</h5>
                <h6 class="card-title">
                  Current Price:&nbsp;&nbsp;
                  <NumericFormat
                    value={products.product_price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Nu."}
                  />
                </h6>
                <Link
                  to={`detail/ ${products.product_id}`}
                  class="btn"
                  state={products}
                >
                  Place Bid
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="ml-3">
                  {currentUser &&
                  currentUser.email === products.product_owner ? (
                    <Link to="/edit" state={products} class="btn">
                      Edit
                    </Link>
                  ) : (
                    ""
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
