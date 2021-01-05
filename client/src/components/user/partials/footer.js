import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <h2>How We Help</h2>
              <ul>
                <li>
                  <Link to="/">Retailers</Link>
                </li>
                <li>
                  <Link to="/">Interiors Designers</Link>
                </li>
                <li>
                  <Link to="/">Product Designers</Link>
                </li>
                <li>
                  <Link to="/">Wholesalers / Importers</Link>
                </li>
                <li>
                  <Link to="/">Artisans</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h2>Get to Know Us</h2>
              <ul>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Policies</Link>
                </li>
                <li>
                  <Link to="/">Careers</Link>
                </li>
                <li>
                  <Link to="/">Press</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h2>Join the Community</h2>
              <ul>
                <li>
                  <Link to="/">Upcoming Events</Link>
                </li>
                <li>
                  <Link to="/">Become a Buyer</Link>
                </li>
                <li>
                  <Link to="/">Become a Seller</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h2>Follow Us</h2>
              <ul>
                <li>
                  <Link to="/">
                    <i className="fab fa-facebook-f mr-2" />
                  </Link>
                  <Link to="/">
                    <i className="fab fa-pinterest mr-2" />
                  </Link>
                  <Link to="/">
                    <i className="fab fa-twitter mr-2" />
                  </Link>
                  <Link to="/">
                    <i className="fab fa-instagram mr-2" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="footerBottom">
        &copy; 2020 <Link to="/">PANDA / TA</Link>{" "}
        <Link to="/">Terms & Conditions</Link> <Link to="/">Privacy</Link>
      </div>
    </>
  );
};

export default Footer;
