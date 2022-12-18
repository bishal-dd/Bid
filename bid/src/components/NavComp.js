import React from "react";
import { Link } from "react-router-dom";

export default function NavComp() {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand sticky" id="navbar">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand rounded-5" href="#">
              <img
                src="https://t4.ftcdn.net/jpg/04/83/17/69/360_F_483176994_Mvj1b9H2sKpq9T1xzoJy6CreJT7leHBL.jpg"
                width="50"
                class="rounded-2"
                height="40"
              />
            </a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    to="/"
                    class="nav-link active rounded-5"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active rounded-5"
                    aria-current="page"
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
              <div class="d-flex">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link
                      class="nav-link active rounded-5"
                      aria-current="page"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link active rounded-5"
                      aria-current="page"
                      to="/add"
                    >
                      Add Item
                    </Link>
                  </li>
                </ul>
              </div>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-dark"
                  type="submit"
                  id="searchbutton"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}