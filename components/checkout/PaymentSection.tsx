"use client";
import React, { useState } from "react";

const PaymentSection = () => {
  let [paymentMethod, setPaymentMethod] = useState("wallet");

  const handlePaymentMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setPaymentMethod(event.target.value);
  };
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <h3>Advance Payment</h3>
              <div className="d-flex" style={{ gap: "10px" }}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="wallet"
                    value="wallet"
                    defaultChecked={paymentMethod == "wallet"}
                    onChange={handlePaymentMethod}
                  />
                  <label className="form-check-label" htmlFor="wallet">
                    Wallet
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="bkash"
                    value="bkash"
                    defaultChecked={paymentMethod == "bkash"}
                    onChange={handlePaymentMethod}
                  />
                  <label className="form-check-label" htmlFor="bkash">
                    Bkash
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="nagad"
                    value="nagad"
                    defaultChecked={paymentMethod == "nagad"}
                    onChange={handlePaymentMethod}
                  />
                  <label className="form-check-label" htmlFor="nagad">
                    Nagad
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="rocket"
                    value="rocket"
                    onChange={handlePaymentMethod}
                    defaultChecked={paymentMethod == "rocket"}
                  />
                  <label className="form-check-label" htmlFor="rocket">
                    Rocket
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 mt-2">
                  {paymentMethod == "wallet" && (
                    <>
                      <div className="form-group d-flex">
                        <input
                          type="integer"
                          className="form-control"
                          placeholder="Amount"
                        />
                        <div className="input-group-text">Wallet Amount:90</div>
                      </div>
                    </>
                  )}
                  {paymentMethod != "wallet" && (
                    <>
                      {" "}
                      <div className="form-group">
                        <label className="form-label">Account No</label>
                        <input
                          type="integer"
                          className="form-control"
                          placeholder=""
                          value="01xxxxxxxxxxx"
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Amount</label>
                        <input
                          type="integer"
                          className="form-control"
                          placeholder="Amount"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Sender No</label>
                        <input
                          type="integer"
                          className="form-control"
                          placeholder="Sender No"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Transaction Id</label>
                        <input
                          type="integer"
                          className="form-control"
                          placeholder="Transaction Id"
                        />
                      </div>{" "}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3>Additional Info</h3>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
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
          <div className="w-100 text-end">
            <button className="btn btn-success me-auto">Confirm</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSection;
