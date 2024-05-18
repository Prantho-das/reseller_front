"use client";

import LoginScreen from "@/components/auth/LoginScreen";
import RegistrationScreen from "@/components/auth/RegistrationScreen";
import { useState } from "react";

const page = () => {
  let [screenType, setScreenType] = useState("login");
  return (
    <>
      <div className="container ">
        <div className="auth-wrapper p-4">
          <div className="card mx-auto" style={{ width: "50%" }}>
            <div className="card-header d-flex justify-content-between shadow">
              <h5
                className="card-title w-100 text-center"
                onClick={() => setScreenType("login")}
                style={{ cursor: "pointer" }}
              >
                Login
              </h5>
              <h5
                className="card-title w-100 text-center"
                onClick={() => setScreenType("register")}
                style={{ cursor: "pointer" }}
              >
                Register
              </h5>
            </div>
            {screenType === "login" ? <LoginScreen /> : <RegistrationScreen />}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
