import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
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
        The Movie Database (TMDB) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDB's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a className="icon-link" href="https://github.com" target="_blank"><span className="icon"><FaGithub /></span></a>
          </span>
          <span className="icon">
          <a className="icon-link" href="https://www.instagram.com" target="_blank"><span className="icon"><FaInstagram /></span></a>
          </span>
          <span className="icon">
          <a className="icon-link" href="#" target="_blank"><span className="icon"><FaTwitter /></span></a>
          </span>
          <span className="icon">
          <a className="icon-link" href="https://www.linkedin.com" target="_blank">
          <span className="icon"><FaLinkedin />
          </span></a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;