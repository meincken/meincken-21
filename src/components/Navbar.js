import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components";
import { color, typography } from "../shared/styles";

const Nav = styled.nav`
  background-color: ${color.darkest};
  border-bottom: 1px solid ${color.primary};
  padding: 1rem 0;
  text-align: center;
  width: 100vw;

  h1 {
    border: 0.1rem solid ${color.primary};
    padding: .5rem;

    a {
      text-decoration: none;
      text-transform: uppercase;

      span {
        color: ${color.lightest};
      }
    }
  }
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 117rem;
`;

const NavMenu = styled.div`
  a {
    cursor: pointer;
    display: inline-block;
    font-weight: ${typography.weight.regular};
    font-size: ${typography.size.m1}rem;
    padding: 0.8rem 1.3rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const Navbar = class extends React.Component {

  render() {
    return (
      <Nav role="navigation" aria-label="main-navigation">
        <Container>
          <h1>
            <Link to="/" title="Logo">
              <span>Nick</span> Meincken
            </Link>
          </h1>
          <NavMenu>
            <Link to="/about">
              About
            </Link>
            <Link to="/photography">
              Photograpy
            </Link>
            <Link to="/art">
              Art
            </Link>
            <Link to="/blog">
              Blog
            </Link>
          </NavMenu>
        </Container>
      </Nav>
    )
  }
}

export default Navbar
