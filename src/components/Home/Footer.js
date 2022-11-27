import { Link } from "react-router-dom";
import logo from "../../images/logo1.jpg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid--footer">
        <div className="logo-col">
          <Link href="index.html" className="footer-logo">
            <img src={logo} className="logo" alt="Logo of Marketplace" />
          </Link>
          <p className="copyright">
            Copyright &copy; 2022 by Marketplace, Inc. All rights reserved.
          </p>
        </div>

        <div className="social-link-col">
          <p className="footer-heading">Social media</p>

          <ul className="social-link">
            <li>
              <Link to="#" className="footer-link">
                <ion-icon
                  name="logo-instagram"
                  className="icon-link"
                ></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <ion-icon name="logo-facebook" className="icon-link"></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <ion-icon name="logo-twitter" className="icon-link"></ion-icon>
              </Link>
            </li>
          </ul>
        </div>

        <div className="resources-col">
          <p className="footer-heading">Resources</p>
          <ul className="resources-link">
            <li>
              <Link to="#" className="footer-link">
                Feedback
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Blog
              </Link>
            </li>
            <li>
              <Link to=" #" className="footer-link">
                Developers
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Terms & conditions
              </Link>
            </li>
          </ul>
        </div>

        <div className="contact-col">
          <p className="footer-heading">Contact</p>
          <address className="contact">
            <p className="address">701 S Nedderman Dr, Arlington, TX 76019</p>
            <Link className="footer-link" to="tel:817-272-2011">
              817-272-2011
            </Link>
            <Link
              className="footer-link"
              to="mailto:marketplace@marketplace.com"
            >
              marketplace@marketplace.com
            </Link>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
