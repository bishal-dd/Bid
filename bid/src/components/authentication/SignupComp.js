import React, { useCallback, useRef } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function SignupComp({ history }) {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await createUserWithEmailAndPassword(
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
      <div>
        <form autoComplete="off">
          <div class="p-3">
            <p class="h1 text-center">Signup</p>
          </div>
          <div class="container justify-content-center  rounded-5" id="box1">
            <div class="row" id="dechen">
              <div class="col">
                <p class="h2">Name</p>
              </div>
              <div class="col">
                <input type="text" class="additemtexbox" />
              </div>
            </div>

            <div class="row" id="dechen2">
              <div class="col">
                <p class="h2">Email</p>
              </div>
              <div class="col">
                <input
                  type="email"
                  name="email"
                  class="additemtexbox"
                  ref={emailRef}
                />
              </div>
            </div>
            <div class="row" id="dechen3">
              <div class="col">
                <p class="h2">Password</p>
              </div>
              <div class="col">
                <input type="password" class="additemtexbox" />
              </div>
            </div>
            <div class="row" id="dechen3">
              <div class="col">
                <p class="h2">Confirm Password</p>
              </div>
              <div class="col">
                <input
                  type="password"
                  name="password"
                  class="additemtexbox"
                  ref={passwordRef}
                />
              </div>
            </div>
          </div>

          <div class="p-3 text-center">
            <a
              href=""
              class="btn btn-light"
              id="loglink"
              onClick={handleSignUp}
            >
              Signup
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
