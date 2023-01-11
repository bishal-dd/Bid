import React, { useCallback, useRef } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function SignupComp({ history }) {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const confirmpasswordRef = useRef("");
  const passwordRef = useRef("");

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      if (confirmpasswordRef.current.value === passwordRef.current.value) {
        try {
          await createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            confirmpasswordRef.current.value
          );
          navigate("/");
        } catch (error) {
          alert(error);
        }
      } else {
        alert("The passwords donot match");
      }
    },
    [history]
  );
  return (
    <>
      <div>
        <form autoComplete="off" onSubmit={handleSignUp}>
          <div class="p-3">
            <p class="h1 text-center">Signup</p>
          </div>
          <div
            class="container w-50 justify-content-center  rounded-5 "
            id="box1"
          >
            <div class="row" id="dechen">
              <div class="col-sm">
                <p class="h2">Name</p>
              </div>
              <div class="col-sm">
                <input
                  type="text"
                  class="w-75 h-75 border border-dark"
                  required
                />
              </div>
            </div>

            <div class="row" id="dechen2">
              <div class="col-sm">
                <p class="h2">Email</p>
              </div>
              <div class="col-sm">
                <input
                  type="email"
                  name="email"
                  class="w-75 h-75 border border-dark"
                  ref={emailRef}
                  required
                />
              </div>
            </div>
            <div class="row" id="dechen3">
              <div class="col-sm">
                <p class="h2">Password</p>
              </div>
              <div class="col-sm">
                <input
                  type="password"
                  class="w-75 h-75 border border-dark"
                  required
                  ref={passwordRef}
                />
              </div>
            </div>
            <div class="row" id="dechen3">
              <div class="col-sm">
                <p class="h2">Confirm Password</p>
              </div>
              <div class="col-sm">
                <input
                  type="password"
                  name="password"
                  class="w-75 h-75 border border-dark"
                  ref={confirmpasswordRef}
                  required
                />
              </div>
            </div>
          </div>

          <div class="p-3 text-center">
            <button type="submit" class="btn btn-light" id="loglink">
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
