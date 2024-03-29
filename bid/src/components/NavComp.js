/* eslint-disable jsx-a11y/anchor-is-valid */
import { signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../firebase";

export default function NavComp() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchitem, setsearchitem] = useState("");

  const handelsignout = async (e) => {
    e.preventDefault();

    await signOut(auth).then(() => {
      navigate("/login");
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchitem}`);
  };

  return (
    <>
      <nav class="navbar fixed-top navbar-expand-xl " id="navbar">
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
          <img
            src="https://t4.ftcdn.net/jpg/04/83/17/69/360_F_483176994_Mvj1b9H2sKpq9T1xzoJy6CreJT7leHBL.jpg"
            width="50"
            class="rounded-2"
            height="40"
            alt="logo"
          />

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
                {currentUser ? (
                  <>
                    <li class="nav-item">
                      <a
                        class="nav-link active rounded-5"
                        aria-current="page"
                        onClick={handelsignout}
                        href="#"
                      >
                        Login out
                      </a>
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
                  </>
                ) : (
                  <li class="nav-item">
                    <Link
                      class="nav-link active rounded-5"
                      aria-current="page"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <form class="d-flex" role="search" onSubmit={onSubmit}>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  setsearchitem(e.target.value);
                }}
                required
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
    </>
  );
}
