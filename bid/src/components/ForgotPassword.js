import React, { useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function ForgotPassword() {
  const emailRef = useRef("");
  const navigate = useNavigate();

  const Resetpassword = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, emailRef.current.value);
      console.log("email sent");
      navigate("/login");
    } catch (error) {
      // Handle the error
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div class="container" id="forgotpasswordcontainer">
      <form onSubmit={Resetpassword}>
        <div>
          <span>
            <button type="submit" class="btn">
              Reset
            </button>
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            <input
              type="email"
              required
              ref={emailRef}
              size="50"
              class="border border-color-dark"
            />
          </span>
        </div>
      </form>
    </div>
  );
}
