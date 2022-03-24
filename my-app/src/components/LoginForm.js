import React, { useState } from "react";
import { auth } from "../config";
import {
  AuthErrorCodes,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { Trans } from "@lingui/macro";

const actionCodeSettings = {
  url: "https://ninth-glider-325616.web.app",
};

const LoginForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setError] = useState([]);

  const googleProvider = new GoogleAuthProvider();
  function loginWithGoogle() {
    return loginWithAuthProvider(googleProvider);
  }
  const signup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      sendEmailVerification(auth.currentUser, actionCodeSettings)
        .then(() => {
          alert("Email verification sent!");
        })
        .catch((error) => {
          setError(error);
        });
    } catch (error) {
      setError(error);
    }
  };
  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        window.location.href = "/";
      });
    } catch (error) {
      if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
        setError(`Wrong password. Try again.`);
      } else {
        setError(`Error: ${error.message}`);
      }
    }
  };
  function loginWithAuthProvider(provider) {
    signInWithPopup(auth, provider)
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => {
        setError(error);
      });
  }
  return (
    <div>
      <form>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">
            <Trans> Email:</Trans>
          </label>
          <input
            type="email"
            id="email"
            className="form-control form-control-lg"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="password">
            <Trans> Password:</Trans>
          </label>
          <input
            type="password"
            id="password"
            className="form-control form-control-lg"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            value="Signup"
            disabled={!email || !password}
            className="btn btn-primary btn-block btn-lg text-light"
            onClick={signup}
          >
            <Trans>Sign up</Trans>
          </button>
          <button
            type="submit"
            value="Login"
            className="mx-2 btn btn-primary btn-block btn-lg text-light"
            disabled={!email || !password}
            onClick={login}
          >
            <Trans>Login</Trans>
          </button>
        </div>
        {errors.general && (
          <div id="divLoginError" role="alert" className="alert alert-warning">
            <label id="lblLoginErrorMessage" htmlFor="divLoginError"></label>
            <p>{errors.general}</p>
          </div>
        )}
      </form>
      <hr />
      <div className="col-md-6 mx-auto ">
        <br />
        <button className="google loginbtn" onClick={loginWithGoogle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-google"
            viewBox="0 0 16 18"
          >
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
          </svg>
          {"\u00A0\u00A0"}
          <Trans>Sign in with Google</Trans>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
