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
      sendEmailVerification(auth.currentUser)
        .then(() => {
          alert("Email verification sent!");
        })
        .catch((error) => {
          setError(error);
        });
    } catch (error) {
      setError(error);
    }
    let interval = setInterval(async () => {
      if (auth.currentUser.emailVerified) {
        clearInterval(interval);
        //history.push("/desired-link");
      }
      await auth.currentUser.reload();
    }, 2000);
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
          <Trans> Login with Google</Trans>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
