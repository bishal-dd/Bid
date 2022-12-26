import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import db, { storage } from "../firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore/lite";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function AdditemComp() {
  const navigate = useNavigate();
  const [productImg, setProductImg] = useState(null);
  const [error, setError] = useState("");

  const [values, setValues] = useState({
    product_name: "",
    product_price: "",
    product_time: "",
    product_description: "",
  });

  const handelchange = (e) => {
    setValues({
      ...values,
      [e.currentTarget.name]: [e.currentTarget.value],
    });
  };

  const types = ["image/png", "image/jpeg"]; // image types

  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);

      setError("");
    } else {
      setProductImg(null);
      setError("Please select a valid image type (jpg or png)");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload the file to storage
      const uploadTask = ref(storage, `images/${productImg.name}`);
      await uploadBytes(uploadTask, productImg);
      console.log("file uploaded");

      // Get the download URL for the file
      const url = await getDownloadURL(uploadTask);
      console.log(`File URL: ${url}`);
      const days = values.product_time;
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + days);

      const w3cTime = endDate.toISOString();

      console.log(w3cTime);
      // Add the product to the database
      await addDoc(collection(db, "Products"), {
        product_name: values.product_name[0],
        product_price: values.product_price[0],
        product_image: url,
        product_time: w3cTime,
        product_description: values.product_description[0],
      }).then(async (getid) => {
        await updateDoc(doc(db, "Products", getid.id), {
          product_id: getid.id,
        });
      });
      console.log("Product added to database");

      // Reset the form values
      setValues({
        product_name: "",
        product_price: "",
        product_time: "",
        product_description: "",
      });

      // Navigate to the home page
      navigate("/");
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div>
        <form>
          <div class="p-3">
            <p class="h1 text-center">Auction</p>
          </div>
          <div class="container justify-content-center  rounded-5" id="box1">
            <div class="row" id="dechen">
              <div class="col">
                <p class="h2">Enter Product</p>
              </div>
              <div class="col">
                <input
                  type="text"
                  name="product_name"
                  class="additemtexbox"
                  value={values.product_name}
                  onChange={handelchange}
                />
              </div>
            </div>
            <div class="row" id="dechen1">
              <div class="col">
                <p class="h2">Insert Image</p>
              </div>
              <div class="col">
                <input
                  type="file"
                  class="additemtexbox"
                  name="product_image"
                  id="file"
                  required
                  onChange={productImgHandler}
                />
              </div>
            </div>
            <div class="row" id="dechen2">
              <div class="col">
                <p class="h2">Enter Price</p>
              </div>
              <div class="col">
                <input
                  type="text"
                  class="additemtexbox"
                  onChange={handelchange}
                  name="product_price"
                />
              </div>
            </div>
            <div class="row" id="dechen3">
              <div class="col">
                <p class="h2">Days Available</p>
              </div>
              <div class="col">
                <input
                  type="number"
                  class="additemtexbox"
                  value={values.product_time}
                  onChange={handelchange}
                  name="product_time"
                  placeholder="0"
                />
              </div>
            </div>
            <div class="row" id="dechen4">
              <div class="col">
                <p class="h2">Description</p>
              </div>
              <div class="col">
                <textarea
                  cols="30"
                  rows="5"
                  value={values.product_description}
                  onChange={handelchange}
                  name="product_description"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="p-3 text-center">
            <a class="btn btn-light" id="loglink" onClick={onSubmit}>
              ADD
            </a>
          </div>
          {error && <span className="error-msg">{error}</span>}
        </form>
      </div>
    </>
  );
}
