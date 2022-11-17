import React from "react";
import { Link } from "react-router-dom";

export default function LoginComp() {
  return (
    <>
      <div class="p-3">
        <p class="h1 text-center">Login</p>
      </div>
      <form>
        <div
          class="container-sm border border-3 border-dark rounded-5"
          id="box"
        >
          <div class="row d-flex justify-content-center mt-5">
            <div class="col-md-6 mb-5">
              <label for="uname" class="labels">
                UserName
              </label>
              <input
                type="text"
                class="border border-top-0 border-right-0 border-left-0 rounded-5 mt-1"
                placeholder="UserName"
                size="30"
                id="uname"
              />
            </div>
            <hr class="mb-3" />
            <div class="row d-flex justify-content-center">
              <div class="col-md-6 mb-5">
                <label for="password" class="labels">
                  Password
                </label>
                <input
                  type="password"
                  class="border border-top-0 border-right-0 border-left-0 rounded-5 mt-1"
                  placeholder="Password"
                  size="30"
                  id="password"
                />
              </div>
            </div>
          </div>
          <div class="row">
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
        <div class="p-3 text-center">
          <button type="submit" class="btn btn-light" id="loglink">
            Login
          </button>
        </div>
        <div class="p-3 text-center">
          <div class="row">
            <div class="col">
              Or Login Using:
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                  width="40"
                  height="40"
                  class="iconsf"
                />
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
