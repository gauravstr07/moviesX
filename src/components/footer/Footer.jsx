import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          MovieX is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries, and more on
          thousands of internet-connected devices. You can watch as much as you
          want, whenever you want – all for one low monthly price.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <a
            href="https://www.instagram.com/gauravsutar2680/?next=%2F"
            target="blank"
          >
            <span className="icon">
              <FaInstagram />
            </span>
          </a>
          <span className="icon">
            <FaTwitter />
          </span>
          <a
            href="https://www.linkedin.com/in/gaurav-sutar-65a59820b/"
            target="blank"
          >
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
