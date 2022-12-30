import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db, { getProducts } from "../firebase";
import { Link } from "react-router-dom";

export default function Search() {
  const { id } = useParams();
  const [productList, setproductList] = useState([]);

  console.log(id);

  useEffect(() => {
    getProducts(db).then((a) => {
      setproductList(a);
    });
  }, []);

  return (
    <>
      <div class="row mt-4" id="mainrow">
        {productList
          .filter((products) =>
            products.product_name.includes(id.toLowerCase())
          )
          .map((pro) => (
            <div class="col">
              <div class="card">
                <a to="/detail">
                  <img
                    src={pro.product_image}
                    class="card-img-top"
                    height="200"
                    alt="..."
                  />
                </a>

                <div class="card-body">
                  <h5 class="card-title">{pro.product_name}</h5>
                  <h6 class="card-title">Start:Nu.{pro.product_price}</h6>
                  <Link
                    to={`/detail/ ${pro.product_id}`}
                    class="btn"
                    state={pro}
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
