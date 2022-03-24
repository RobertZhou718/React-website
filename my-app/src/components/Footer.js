const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md mb-0 text-muted">&copy; 2022 SumAccounting, Inc</p>

        <ul className="nav col-md justify-content-end">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/pricing" className="nav-link px-2 text-muted">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="/reservation" className="nav-link px-2 text-muted">
              Reservation
            </a>
          </li>
          <li className="nav-item">
            <a href="/aboutus" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/contactus" className="nav-link px-2 text-muted">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
