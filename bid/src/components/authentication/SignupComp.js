import React from "react";

export default function SignupComp() {
  return (
    <>
      <div>
        <form>
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
                <input type="email" class="additemtexbox" />
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
                <input type="password" class="additemtexbox" />
              </div>
            </div>
          </div>

          <div class="p-3 text-center">
            <a href="" class="btn btn-light" id="loglink">
              Signup
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
