import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-white navbar-light fixed-top">
            <div className="container">
                <a href="/" className="navbar-brand"><img src="img/logo.jpg" alt="" width="250" height="55" className="d-inline-block align-text-top" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item drop_down ">
                            <NavLink className={({ isActive }) => isActive ? "current_page nav-link text-dark drop_btn" : "nav-link text-dark drop_btn"}   to="/">Home</NavLink></li>
                        <li className="nav-item drop_down">
                            <NavLink className={({ isActive }) => isActive ? "current_page nav-link text-dark drop_btn" : "nav-link text-dark drop_btn"}   to="Personal" id="navbarDarkDropdownMenuLink" role="button" aria-expanded="false">
                                Personal Tax
                            </NavLink>
                            <ul className="dropdown-menu drop_down-content" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="/#">Tax For Students</a></li>
                                <li><a className="dropdown-item" href="/#">Rental Income</a></li>
                                <li><a className="dropdown-item" href="/#">Self-employed Taxes</a></li>
                            </ul>
                        </li>
                        <li className="nav-item  drop_down ">
                            <NavLink className={({ isActive }) => isActive ? "current_page nav-link text-dark drop_btn" : "nav-link text-dark drop_btn"}   to="Business" id="navbarDarkDropdownMenuLink" role="button" aria-expanded="false">
                                Business Tax
                            </NavLink>
                            <ul className="dropdown-menu drop_down-content" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="/#">Incorporation & Business Registration</a></li>
                                <li><a className="dropdown-item" href="/#">Payroll & Remittance</a></li>
                                <li><a className="dropdown-item" href="/#">Accounting & Bookkeeping</a></li>
                                <li><a className="dropdown-item" href="/#">Financial Statements</a></li>
                            </ul>
                        </li>
                        <li className="nav-item drop_down ">
                            <NavLink className={({ isActive }) => isActive ? "current_page nav-link text-dark drop_btn" : "nav-link text-dark drop_btn"}   to="Housing">Housing Related Tax</NavLink></li>
                        <li className="nav-item drop_down">
                            <NavLink className={({ isActive }) => isActive ? "current_page nav-link text-dark drop_btn" : "nav-link text-dark drop_btn"}   to="AboutUs" id="navbarDarkDropdownMenuLink" role="button" aria-expanded="false">
                                About Us
                            </NavLink>
                            <ul className="dropdown-menu  drop_down-content" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><NavLink  className="dropdown-item" to="#section1">COVID-19 Related Tax Assistance</NavLink></li>

                            </ul>
                        </li>
                        <li className="nav-item drop_down ">
                            <NavLink className={({ isActive }) => isActive ? "current_page nav-link text-dark drop_btn" : "nav-link text-dark drop_btn"}   to="ContactUs" id="navbarDarkDropdownMenuLink" aria-expanded="false">
                                Contact Us
                            </NavLink>
                            <ul className="dropdown-menu  drop_down-content" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="/#">Download Centre</a></li>
                                <li><a className="dropdown-item" href="/#">Resource Centre</a></li>

                            </ul>
                        </li>
                        <li className="nav-item drop_down bg-warning">
                            <NavLink className={({ isActive }) => isActive ? "current_page nav-link text-dark drop_btn" : "nav-link text-dark drop_btn"}   to="TaxOnline">Tax online</NavLink></li>
                        <li className="nav-item drop_down float-end">
                            <span  role="button" aria-expanded="false">lang</span>
                            <ul className="dropdown-menu dropdown-menu-light drop_down-content" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><button className="dropdown-item text-center" id="English">EN</button></li>
                                <li><button className="dropdown-item text-center" id="Chinese">中文</button></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
