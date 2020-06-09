import React from 'react';
import './footer.css';
import LogoImage from '../../assets/images/logo-w.png'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <div className="footer-aside">
          <aside className="aside25">
            <div>
              <h3>Navigate</h3>
              <p>Home</p>
              <p>Garden</p>
              <p>Stoires</p>
              <p>About</p>
            </div>
            <div>
              <h3>Need help?</h3>
              <p>FAQ</p>
              <p>Contact</p>
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
            </div>
          </aside>
          <aside className="aside50">
            <div>
              <h3>Us</h3>
            </div>
          </aside>
          <aside className="aside25">
            <div>
              <h3>LOGO</h3>
              <img src={LogoImage} alt="logo-white"></img>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Footer;
