import React from "react";

const StepProgressSection = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div
          className="col-11 col-sm-9 col-md-7  
                col-lg-10 col-xl-10 text-center p-0 mt-3 mb-2"
        >
          <div className="px-0 pt-4 pb-0 mt-3 mb-3">
            <form id="form">
              <ul id="progressbar">
                <li className="active" id="step1">
                  <strong>Cart</strong>
                </li>
                <li id="step2">
                  <strong>Checkout</strong>
                </li>
                <li id="step3">
                  <strong>Confirmation</strong>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepProgressSection;
