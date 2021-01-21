import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { color } from "../shared/styles";
import Logo from "./Logo";

import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";

const FooterBlock = styled.footer`
  background-color: ${color.darkest};
  border-top: 1px solid ${color.primary};
  display: grid;
  grid-row-start: 4;
  grid-row-end: 5;
  padding: 2rem 0;
  text-align: center;
  width: 100vw;

  a {
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.8rem 1.3rem;
    display: inline-block;
    cursor: pointer;
  }

  .menu-list {
    display: flex;
    justify-content: center;
  }
`;

const Footer = class extends React.Component {
  render() {
    return (
      <FooterBlock>
        <Logo />
        <section className="menu">
          <div className="menu-list">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Latest Stories</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </section>
        <div className="social">
          <a title="twitter" href="https://twitter.com">
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
              style={{ width: "2em", height: "2em" }}
            />
          </a>
          <a title="instagram" href="https://instagram.com">
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: "2em", height: "2em" }}
            />
          </a>
        </div>
      </FooterBlock>
    );
  }
};

export default Footer;
