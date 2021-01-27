import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { color } from "../../shared/styles";
import Logo from "../../components/Global/Logo";
import Social from "./Social";

const FooterBlock = styled.footer`
  background-color: ${color.darkest};
  display: grid;
  grid-row-start: 4;
  grid-row-end: 5;
  text-align: center;
  width: 100vw;
  display: grid;
  grid-template-columns:
    [full-start] minmax(2rem, 1fr)
    [main-start] minmax(0, 117rem) [main-end]
    minmax(2rem, 1fr) [full-end];

  a {
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.8rem 1.3rem;
    display: inline-block;
    cursor: pointer;
  }

  .menu {
    grid-column: main;
    padding: 2rem 0;

    h1 {
      margin: auto;
    }
  }
`;

const Footer = class extends React.Component {
  render() {
    return (
      <FooterBlock>
        <Social />
        <section className="menu">
          <Logo />
          <small>&copy;Nick Meincken 1997-{new Date().getFullYear()}</small>
        </section>
      </FooterBlock>
    );
  }
};

export default Footer;
