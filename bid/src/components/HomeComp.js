import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigation } from "react-router-dom";
import db, { getProducts } from "../firebase";

export default function HomeComp() {
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
              <a to="/detail">
                <img
                  src={products.product_image}
                  class="card-img-top"
                  height="200"
                  alt="..."
                />
              </a>

              <div class="card-body">
                <h5 class="card-title">{products.product_name}</h5>
                <h6 class="card-title">Start:Nu.{products.product_price}</h6>
                <Link
                  to={`detail/ ${products.product_id}`}
                  class="btn"
                  state={products}
                >
                  Place Bid
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
