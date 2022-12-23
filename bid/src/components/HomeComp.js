import React from "react";
import { Link, NavLink, useNavigation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

export default function HomeComp() {
  const product = [
    {
      id: 1,
      product_name: "TV",
      product_price: 300,
      product_image:
        "http://cdn.shopify.com/s/files/1/0608/4988/1306/products/1_9b8014ad-124e-4742-a628-9a4c4affe617.jpg?v=1648711109",
      product_time: 2,
      product_description: "jefkekfek",
    },
    {
      id: 2,
      product_name: "shoe",
      product_price: 34,
      product_image:
        "https://s.yimg.com/ny/api/res/1.2/_X57eRKHbu.OF9wDbrAsMg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2021-09/1538ed90-0b59-11ec-bffa-b35b3846a5a0",
      product_time: 1,
      product_description: "deded",
    },
  ];

  return (
    <>
      <div class="row mt-4" id="mainrow">
        {product.map((products) => (
          <div class="col">
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
                  to={`detail/ ${products.id}`}
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
