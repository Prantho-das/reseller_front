import ProductCard from "@/components/cards/ProductCard";
import React from "react";

const page = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="category_header">
          <div className="row">
            <div className="col-lg-2 d-lg-block d-none">
              {" "}
              <nav className="breadcrumb">
                <a className="breadcrumb-item" href="#">
                  Home
                </a>
                <a className="breadcrumb-item" href="#">
                  Category
                </a>
                <span className="breadcrumb-item active">Pant</span>
              </nav>
            </div>
            <div className="col-lg-10">
              <h3>Pant</h3>
              <div className="d-flex">
                <h6>
                  Showing <b>1–9</b> Products from <b>9</b> Products
                </h6>

                <div className="ms-auto d-flex align-items-center mb-2">
                  <label className="form-label w-100">Sort by</label>
                  <select
                    className="form-select w-100"
                    aria-label="Default select example"
                  >
                    <option selected>Default</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 d-lg-block d-none">
            <div className="accordion rounded-0" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Category One
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Shirt
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Pant
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Category Two
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Category Three
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <ProductCard />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <ProductCard />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <ProductCard />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <ProductCard />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <ProductCard />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
