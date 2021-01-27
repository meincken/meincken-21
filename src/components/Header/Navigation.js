import React from "react";
import { Link } from "gatsby";
import { bool } from "prop-types";
import styled from "styled-components";
import { typography, color } from "../../shared/styles";

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ open }) => color.lightest};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 40vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  h2 {
    color: #1e1e1e;
  }

  a {
    cursor: pointer;
    display: block;
    font-weight: ${typography.weight.regular};
    font-size: ${typography.size.m1}rem;
    padding: 1rem 0;
    text-decoration: none;
  }
`;

const Navbar = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <NavMenu
      role={`navigation`}
      aria-label={`main-navigation`}
      open={open}
      aria-hidden={!isHidden}
      {...props}
    >
      <h2>Navigation</h2>
      <Link to="/about" tabIndex={tabIndex}>
        About
      </Link>
      <Link to="/photography" tabIndex={tabIndex}>
        Photograpy
      </Link>
      <Link to="/art" tabIndex={tabIndex}>
        Art
      </Link>
      <Link to="/blog" tabIndex={tabIndex}>
        Articles
      </Link>
    </NavMenu>
  );
};

Navbar.propTypes = {
  open: bool.isRequired,
};

export default Navbar;
