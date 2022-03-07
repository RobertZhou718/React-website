import React from "react";
import LoginForm from "../components/LoginForm";
import { Trans } from "@lingui/macro";
const SignIn = () => {
  return (
    <div
      className="d-flex align-items-center gradient-custom-3 p-5"
      id="loginDiv"
    >
      <div className="container p-5 ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body p-5">
                <h3 className="text-uppercase text-center mb-5">
                  <Trans>Login/Sign up</Trans>
                </h3>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
