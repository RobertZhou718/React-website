import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../config";
import { signOut } from "firebase/auth";
import { Trans } from "@lingui/macro";

export function logout() {
  return signOut(auth);
}

const Navbar = ({ user, setLanguage }) => {
  const [loginDiv, setLoginDiv] = useState(null);
  const [showLogin, hideLogin] = useState(false);
  useEffect(() => {
    if (user) {
      setLoginDiv(user.displayName);
      hideLogin(true);
    } else {
      setLoginDiv(null);
      hideLogin(false);
    }
  }, [user]);
  return (
    <nav className="navbar navbar-expand-md bg-white navbar-light fixed-top">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img
            src="img/logo.jpg"
            alt=""
            width="250"
            height="55"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item drop_down ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "current_page nav-link text-dark drop_btn"
                    : "nav-link text-dark drop_btn"
                }
                to="/"
              >
                <Trans>Home</Trans>
              </NavLink>
            </li>
            <li className="nav-item drop_down">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "current_page nav-link text-dark drop_btn"
                    : "nav-link text-dark drop_btn"
                }
                to="personal"
                id="navbarDarkDropdownMenuLink"
                role="button"
                aria-expanded="false"
              >
                <Trans> Personal Tax</Trans>
              </NavLink>
              <ul
                className="dropdown-menu drop_down-content"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/#">
                    <Trans>Tax For Students</Trans>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <Trans> Rental Income</Trans>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <Trans> Self-employed Taxes</Trans>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item  drop_down ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "current_page nav-link text-dark drop_btn"
                    : "nav-link text-dark drop_btn"
                }
                to="business"
                id="navbarDarkDropdownMenuLink"
                role="button"
                aria-expanded="false"
              >
                <Trans>Business Tax</Trans>
              </NavLink>
              <ul
                className="dropdown-menu drop_down-content"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/#">
                    <Trans> Incorporation & Business Registration</Trans>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <Trans> Payroll & Remittance</Trans>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <Trans> Accounting & Bookkeeping</Trans>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <Trans> Financial Statements</Trans>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item drop_down ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "current_page nav-link text-dark drop_btn"
                    : "nav-link text-dark drop_btn"
                }
                to="housing"
              >
                <Trans> Housing Related Tax</Trans>
              </NavLink>
            </li>
            <li className="nav-item drop_down">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "current_page nav-link text-dark drop_btn"
                    : "nav-link text-dark drop_btn"
                }
                to="aboutus"
                id="navbarDarkDropdownMenuLink"
                role="button"
                aria-expanded="false"
              >
                <Trans> About Us</Trans>
              </NavLink>
              <ul
                className="dropdown-menu  drop_down-content"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <NavLink className="dropdown-item" to="#section1">
                    <Trans>COVID-19 Related Tax Assistance</Trans>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item drop_down ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "current_page nav-link text-dark drop_btn"
                    : "nav-link text-dark drop_btn"
                }
                to="contactus"
                id="navbarDarkDropdownMenuLink"
                aria-expanded="false"
              >
                <Trans>Contact Us</Trans>
              </NavLink>
              <ul
                className="dropdown-menu  drop_down-content"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/#">
                    <Trans>Download Centre</Trans>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <Trans> Resource Centre </Trans>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item drop_down bg-warning">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "current_page nav-link text-dark drop_btn"
                    : "nav-link text-dark drop_btn"
                }
                to="taxonline"
              >
                <Trans> Tax online</Trans>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                className={({ isActive }) =>
                  isActive || showLogin
                    ? "d-none"
                    : "nav-link text-dark  drop_btn"
                }
                to="signin"
              >
                <Trans>SignIn</Trans>
              </NavLink>
            </li>

            <li className="nav-item text-dark drop_down float-end">
              <span
                className="nav-link text-dark drop_btn"
                role="button"
                aria-expanded="false"
              >
                <Trans>Lang</Trans>
              </span>
              <ul
                className="dropdown-menu dropdown-menu-light drop_down-content"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <button
                    className="dropdown-item text-center"
                    id="English"
                    onClick={() => {
                      setLanguage("en");
                    }}
                  >
                    EN
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item text-center"
                    id="Chinese"
                    onClick={() => {
                      setLanguage("cn");
                    }}
                  >
                    中文
                  </button>
                </li>
              </ul>
            </li>
            <div className={showLogin ? "mx-4" : "d-none"}>
              <li className="nav-item text-dark drop_down float-end">
                <img
                  src="./img/profile.png"
                  alt="profile"
                  width="65px"
                  className="rounded-circle drop_btn"
                />
                <ul
                  className="dropdown-menu dropdown-menu-light drop_down-content"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li className="text-center container">{loginDiv}</li>
                  <li>
                    <button
                      className="dropdown-item text-center"
                      onClick={logout}
                    >
                      <Trans>Sign out</Trans>
                    </button>
                  </li>
                </ul>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
