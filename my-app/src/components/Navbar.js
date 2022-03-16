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
    <nav className={"navbar navbar-expand-lg fixed-top"}>
      <div className="container">
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
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <a href="/" className="navbar-brand">
              <img
                src="img\logo512.png"
                alt="logo"
                width="55px"
                height="55px"
                className="d-inline-block align-text-top"
              />
            </a>
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
                to="pricing"
                id="navbarDarkDropdownMenuLink"
                role="button"
                aria-expanded="false"
              >
                <Trans> Pricing</Trans>
              </NavLink>
            </li>
            <li className="nav-item  drop_down ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "current_page nav-link text-dark drop_btn"
                    : "nav-link text-dark drop_btn"
                }
                to="reservation"
                id="navbarDarkDropdownMenuLink"
                role="button"
                aria-expanded="false"
              >
                <Trans>Reservation</Trans>
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
              {/* <ul
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
              </ul> */}
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
                <Trans>Login</Trans>
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
                    English
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
