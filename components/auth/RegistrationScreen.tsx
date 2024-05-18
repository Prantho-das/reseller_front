import Link from "next/link";
import React from "react";

const RegistrationScreen = () => {
  return (
    <>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Full Name
            </label>
            <input type="text" className="form-control " />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control " />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Mobile No
            </label>
            <input type="text" className="form-control " />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input type="password" className="form-control " />
          </div>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Shop Name
            </label>
            <input type="text" className="form-control " />
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>District</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-6">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Thana</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Address
            </label>
            <input type="text" className="form-control " />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              WebSite or Page Url
            </label>
            <input type="url" className="form-control " />
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Term & Condition{" "}
              <Link className="text-info" href="">
                Applied
              </Link>
            </label>
          </div>
          <button className="btn btn-primary d-block w-100">Register</button>
        </form>
      </div>
    </>
  );
};

export default RegistrationScreen;
