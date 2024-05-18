import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* for collapse screen */}
          <div className="d-md-none">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="d-none d-md-block w-100 text-light">
            <div className="row g-0">
              <div className="col-2">
                <a className="navbar-brand" href="#">
                  Reseller Club
                </a>
              </div>
              <div className="col-7 product_search_wrapper">
                <label htmlFor="product_search_bar">
                  <FaMagnifyingGlass />
                </label>
                <input
                  id="product_search_bar"
                  className="form-control rounded-0"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />{" "}
              </div>
              <div className="col-3">
                <ul className="navbar-nav px-5 w-100 justify-content-end">
                  <li className="nav-item">
                    <a
                      className="nav-link active d-flex space-2 align-items-center text-light"
                      aria-current="page"
                      href="#"
                    >
                      <RxAvatar className="me-2" />
                      <span>My Panel</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">
                      <BiShoppingBag />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
