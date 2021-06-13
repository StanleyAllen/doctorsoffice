import React from 'react';
import { AmplifySignOut } from "@aws-amplify/ui-react";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">
        <nav className="nav" role="navigation">
          <div className="container nav-elements">
            <div className="branding">
              <a href="#home"><img src="images/hpluslogo.svg" alt="Logo - H Plus Sports" /></a>
              <p className="address">100 Main Street<br />
              Seattle, WA 98144
            </p>
            </div>
            <ul className="navbar">
              <li><a href="#home">home</a></li>
              <li><a href="#products">products</a></li>
              <li><a href="#people">people</a></li>
            </ul>
          </div>
        </nav>const name = new type(arguments);
        <p className="legal">I want a copyright on everything</p>
        <p><AmplifySignOut/></p>
      </div>
    </footer>
  );
}

export default Footer;