import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-main p-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 footer-col">
              <div className="footer-title">
                <h3 className="jsx-dc0f4aac11d231c9">CONTACT INFO </h3>
              </div>
              <div className="footer-navs">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#" className="nav-link ">
                      Footer Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Footer Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link text-lowercase">
                      Footer Link
                    </a>
                  </li>
                </ul>
                <div className="footer-social-icons">
                  <ul className="jsx-dc0f4aac11d231c9"></ul>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 footer-col">
              <div className="footer-title">
                <h3 className="jsx-dc0f4aac11d231c9">know us</h3>
              </div>
              <div className="footer-navs">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#" className="nav-link ">
                      Footer Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Footer Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link text-lowercase">
                      Footer Link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 footer-col">
              <div className="footer-title">
                <h3 className="jsx-dc0f4aac11d231c9">shopping information</h3>
              </div>
              <div className="footer-navs">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#" className="nav-link ">
                      Footer Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Footer Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link text-lowercase">
                      Footer Link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 footer-col">
              <div className="footer-title">
                <h3 className="jsx-dc0f4aac11d231c9">SERVICE INFORMATION </h3>
              </div>
              <div className="footer-navs">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#" className="nav-link ">
                      Footer Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Footer Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link text-lowercase">
                      Footer Link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 footer-col d-none">
              <div className="footer-title">
                <h3 className="jsx-dc0f4aac11d231c9">category</h3>
              </div>
              <div className="footer-navs">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#" className="nav-link ">
                      Footer Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Footer Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link text-lowercase">
                      Footer Link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 footer-col d-none  ">
              <div className="footer-title">
                <h3 className="">subscribe us</h3>
              </div>
              <div className="footer-navs">
                <div className="form-group">
                  <p className="mb-3">
                    Keep yourself updated with the latest Sailor News, Fashion
                    Updates and Blogs! Subscribe here!
                  </p>
                  <input
                    type="email"
                    id="exampleFormControlInput1"
                    placeholder="Type your email"
                    className="form-control"
                    value=""
                    style={{
                      backgroundImage:
                        "url(&quot;data:image/png;base64,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&quot;) !important",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "20px",
                      backgroundPosition: "97% center",
                      cursor: "auto",
                    }}
                  />

                  <button className="btn text-white btn-outline-secondary mt-2">
                    Follow Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
