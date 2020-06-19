import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="page-footer font-small footer unique-color-dark">
      <div className="container text-center text-md-left pt-5">
        <div className="row mt-3">
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Navigate</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <Link to="#!">Home</Link>
            </p>
            <p>
              <Link to="#!">Garden</Link>
            </p>
            <p>
              <Link to="#!">Stories</Link>
            </p>
            <p>
              <Link to="#!">About</Link>
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Need help?</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!">FAQ</a>
            </p>
            <p>
              <a href="#!">Contact</a>
            </p>
            <p>
              <a href="#!">Your Account</a>
            </p>
            <p>
              <a href="#!">Privacy Policy - T&amp;C</a>
            </p>
          </div>

          <div className="col-md-4 col-lg-2 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Us</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-instagram mr-1" aria-hidden="true"></i> lamacetita_co
            </p>
            <p>
              <i className="fa fa-envelope"></i> Support@lamacetita.com
            </p>
            <p>
              <i className="fa fa-map-marker mr-2"></i> From Medellín, Colombia ♡
            </p>
          </div>

          <div className="col-md-4 col-lg-4 col-xl-5 mx-auto mb-4">
            <img src="/images/logo.png" width="200px" alt="logo-white"></img>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://lamacetita.com/">Kimy Contrast</a>
      </div>

    </footer>
  );
}

export default Footer;
