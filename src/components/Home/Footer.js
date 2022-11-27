import { Link } from "react-router-dom";
import logo from "../../images/logo1.jpg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container grid--footer">
        <div class="logo-col">
          <Link href="index.html" class="footer-logo">
            <img src={logo} class="logo" alt="Logo of Marketplace" />
          </Link>
          <p class="copyright">
            Copyright &copy; 2022 by Marketplace, Inc. All rights reserved.
          </p>
        </div>

        <div class="social-link-col">
          <p class="footer-heading">Social media</p>

          <ul class="social-link">
            <li>
              <Link to="#" class="footer-link">
                <ion-icon name="logo-instagram" class="icon-link"></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                <ion-icon name="logo-facebook" class="icon-link"></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                <ion-icon name="logo-twitter" class="icon-link"></ion-icon>
              </Link>
            </li>
          </ul>
        </div>

        <div class="resources-col">
          <p class="footer-heading">Resources</p>
          <ul class="resources-link">
            <li>
              <Link to="#" class="footer-link">
                Feedback
              </Link>
            </li>
            <li>
              <Link to="#" class="footer-link">
                Blog
              </Link>
            </li>
            <li>
              <Link to=" #" class="footer-link">
                Developers
              </Link>
            </li>
            <li>
              <Link to="#" class="footer-link">
                Terms & conditions
              </Link>
            </li>
          </ul>
        </div>

        <div class="contact-col">
          <p class="footer-heading">Contact</p>
          <address class="contact">
            <p class="address">701 S Nedderman Dr, Arlington, TX 76019</p>
            <Link class="footer-link" to="tel:817-272-2011">
              817-272-2011
            </Link>
            <Link class="footer-link" to="mailto:marketplace@marketplace.com">
              marketplace@marketplace.com
            </Link>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
