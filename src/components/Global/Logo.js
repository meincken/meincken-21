import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { color } from "../../shared/styles";

const H1 = styled.h1`
  border: 0.1rem solid ${color.primary};
  display: block;
  font-size: 2rem;
  max-width: 30rem;
  padding: 0.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;

    span {
      color: ${color.lightest};
    }
  }
`;

const Logo = class extends React.Component {
  render() {
    return (
      <H1>
        <Link to="/" title="Logo">
          <span>Nick</span> Meincken
        </Link>
      </H1>
    );
  }
};

export default Logo;
