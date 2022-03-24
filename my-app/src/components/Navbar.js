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
  const [show, setShow] = useState(true);
  const navbarContoller = () => {
    if (window.scrollY > 10) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navbarContoller);
    if (user) {
      setLoginDiv(user.displayName);
      hideLogin(true);
    } else {
      setLoginDiv(null);
      hideLogin(false);
    }
  }, [user]);

  return (
    <>
      {show ? (
        <nav className={"navbar navbar-light navbar-expand-lg fixed-top"}>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-translate"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                      <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                    </svg>
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
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
