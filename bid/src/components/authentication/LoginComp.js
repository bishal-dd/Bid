import React from "react";
import { Link } from "react-router-dom";
import { useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function LoginComp({ history }) {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSignin = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );
        navigate("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <>
      <div class="p-3">
        <p class="h1 text-center">Login</p>
      </div>
      <form autoComplete="off" onSubmit={handleSignin}>
        <div
          class="container-lg w-50 justify-content-center border border-3 border-dark rounded-5 "
          id="box"
        >
          <div class="row d-flex justify-content-center mt-5">
            <div class="col-md-6 mb-5">
              <label for="uname" class="labels">
                Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                type="text"
                class=" w-75  border border-top-0 border-right-0 border-left-0 rounded-5 mt-1"
                placeholder="UserName"
                size="30"
                id="uname"
                ref={emailRef}
                required
              />
            </div>
            <hr class="mb-3" />
            <div class="row d-flex justify-content-center mt-5">
              <div class="col-md-6 mb-5">
                <label for="password" class="labels">
                  Password:
                </label>
                <input
                  type="password"
                  class="w-75  border border-top-0 border-right-0 border-left-0 rounded-5 mt-1"
                  placeholder="Password"
                  size="30"
                  id="password"
                  ref={passwordRef}
                  required
                />
              </div>
            </div>
          </div>
          <div class="container-xxl overflow-hidden">
            <div class="row gx-5">
              <div class="col mb-3">
                <a href="#" id="for">
                  Forgot password?
                </a>
              </div>
              <div class="col mb-3">
                <Link to="/signup" id="for1">
                  Signup?
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="p-3 text-center">
          <button type="submit" class="btn btn-light" id="loglink">
            Login
          </button>
        </div>
      </form>
    </>
  );
}
