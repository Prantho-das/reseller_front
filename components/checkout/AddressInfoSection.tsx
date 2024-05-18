import React from "react";

const AddressInfoSection = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h3>Billing Address</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Full name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Mobile No</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile No"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">District</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Thana</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Address</label>
                    <textarea
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3>Shipping Address</h3>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Same As Billling Address
                </label>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Full name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Mobile No</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile No"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">District</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Thana</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Address</label>
                    <textarea
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h4>Summary</h4>
              <h6 className="text-muted d-flex justify-content-between">
                <span>Sub-Total</span> <span>$80</span>
              </h6>
              <h6 className="text-muted d-flex justify-content-between">
                <span>Delivery Charges</span> <span>$80</span>
              </h6>
              <hr />
              <h4 className="d-flex justify-content-between">
                <span> Total Amount</span> <span>$80</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressInfoSection;
