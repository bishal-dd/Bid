import React from "react";

export default function DetailComp() {
  return (
    <>
      <div class="row container">
        <div class="col">
          <img
            src="http://cdn.shopify.com/s/files/1/0608/4988/1306/products/1_9b8014ad-124e-4742-a628-9a4c4affe617.jpg?v=1648711109"
            width="600"
            height="500"
          />
        </div>
        <div class="col mt-5">
          <h3>LED TV</h3>
          <h4>Current Bid:10,000</h4>
          <h4>Time remaining:10:23:90</h4>
          <p>
            <a href="#" class="btn">
              Place Bid
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
