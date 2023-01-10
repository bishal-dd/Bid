import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import db, { storage } from "../firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore/lite";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { AuthContext } from "../Context/AuthContext";

export default function AdditemComp() {
  const { currentUser } = useContext(AuthContext);
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

      const daysLeftNum = Number(values.product_time[0]);
      console.log(daysLeftNum);

      // Get the current date in the W3C format
      const currentDate = new Date().toISOString();
      console.log(currentDate);

      // Subtract the number of days left from the current date
      const newDate = new Date(currentDate);
      newDate.setDate(newDate.getDate() + daysLeftNum);
      const finalDate = newDate.toISOString();

      // Add the product to the database
      await addDoc(collection(db, "Products"), {
        product_name: values.product_name[0],
        product_price: values.product_price[0],
        product_image: url,
        product_time: finalDate,
        product_description: values.product_description[0],
        product_owner: currentUser.email,
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
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div class="p-3">
            <p class="h1 text-center">Auction</p>
          </div>
          <div
            class="container w-75 justify-content-center  rounded-5"
            id="box1"
          >
            <div class="row" id="dechen">
              <div class="col-sm">
                <p class="h2">Enter Product</p>
              </div>
              <div class="col-sm">
                <input
                  type="text"
                  name="product_name"
                  class="w-75 h-75 border border-dark"
                  value={values.product_name}
                  onChange={handelchange}
                  required
                />
              </div>
            </div>
            <div class="row" id="dechen1">
              <div class="col-sm">
                <p class="h2">Insert Image</p>
              </div>
              <div class="col-sm">
                <input
                  type="file"
                  class="w-75 h-75"
                  name="product_image"
                  id="file"
                  required
                  onChange={productImgHandler}
                />
              </div>
            </div>
            <div class="row" id="dechen2">
              <div class="col-sm">
                <p class="h2">Enter Price</p>
              </div>
              <div class="col-sm">
                <input
                  type="number"
                  class="w-75 h-75 border border-dark"
                  onChange={handelchange}
                  name="product_price"
                  required
                />
              </div>
            </div>
            <div class="row" id="dechen3">
              <div class="col-sm">
                <p class="h2">Days Available</p>
              </div>
              <div class="col-sm">
                <input
                  type="number"
                  class="w-75 h-75 border border-dark"
                  value={values.product_time}
                  onChange={handelchange}
                  name="product_time"
                  placeholder="0"
                  required
                />
              </div>
            </div>
            <div class="row" id="dechen4">
              <div class="col-sm">
                <p class="h2">Description</p>
              </div>
              <div class="col-sm">
                <textarea
                  class="w-75 h-100 border border-dark"
                  value={values.product_description}
                  onChange={handelchange}
                  name="product_description"
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div class="p-3 text-center">
            <button type="submit" class="btn btn-light" id="loglink">
              ADD
            </button>
          </div>
          {error && <span className="error-msg">{error}</span>}
        </form>
      </div>
    </>
  );
}
