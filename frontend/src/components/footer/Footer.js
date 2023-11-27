import React from "react";
import { Link } from 'react-router-dom';
import playStore from "../../images/playstore.png";
import appStore from "../../images/Appstore.png";
//import "./Footer.css";
const Footer = () =>{
    return(
        <footer id="footer" className="bg-dark text-light pt-5 pb-4">
          <div className="container">
            <div className="row">
              {/* Left Footer */}
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <p>Download app for Android and IOS mobile phone</p>
                <p><img src={playStore} alt="playStore" className="img-fluid footer-logo" /></p>
                <p><img src={appStore} alt="Appstore" className="img-fluid footer-logo" /></p>
              </div>

              {/* Middle Footer */}
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <h1>Emporium DEvs</h1>
                <p>High Quality is our first priority</p>
                <p>Copyrights 2023 &copy; Emporium DEvs</p>
              </div>

              {/* Right Footer */}
              <div className="col-lg-4 col-md-6">
                <h4>Follow us</h4>
                <Link to="#" className="d-block">Instagram</Link>
                <Link to="#" className="d-block">Facebook</Link>
              </div>
            </div>
          </div>
        </footer>
    );
};

export default Footer;