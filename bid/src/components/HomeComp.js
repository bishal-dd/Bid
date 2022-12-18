import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HomeComp() {
  const products = useSelector((state) => state.product);
  return (
    <>
      <div class="row mt-4" id="mainrow">
        {products.map((product) => (
          <div class="col">
            <div class="card">
              <a to="/detail">
                <img
                  src="http://cdn.shopify.com/s/files/1/0608/4988/1306/products/1_9b8014ad-124e-4742-a628-9a4c4affe617.jpg?v=1648711109"
                  class="card-img-top"
                  height="200"
                  alt="..."
                />
              </a>

              <div class="card-body">
                <h5 class="card-title">{product.product_name}</h5>
                <h6 class="card-title">Start:Nu. {product.product_price}</h6>
                <Link to="detail" class="btn">
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
