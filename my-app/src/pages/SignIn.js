import React from "react";
import LoginForm from "../components/LoginForm";
import Terms from "../components/Terms";

const SignIn = () => {
  return (
    <div>
      <div className="loginForm text-center p-5" style={{ marginTop: "80px" }}>
        <main className="form-signin">
          <LoginForm />
        </main>
      </div>
      <hr />
      <Terms />
    </div>
  );
};
export default SignIn;
