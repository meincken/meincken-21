import React from "react";
import styled from "styled-components";
import { color } from "../../shared/styles";

const PromoBlock = styled.section`
  background-color: ${color.primary};
  color: ${color.lightest};
  grid-column: full;
  padding: 2rem 0;

  .container {
    align-items: center;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 96rem;

    @media (min-width: 768px) {
      flex-flow: row;
    }
  }

  .content {
    margin: 0 2rem;

    @media (min-width: 768px) {
      margin: 0;
    }
  }

  a {
    background-color: ${color.lightest};
    border: 0.1rem solid black;
    color: black;
    line-height: 1;
    padding: 1rem 2rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const Promo = class extends React.Component {
  render() {
    return (
      <PromoBlock className={`promo`}>
        <div className={`container`}>
          <div className={`content`}>
            <h2>I also do web development</h2>
            <p>
              This site is mainly for things not web related and I'm trying to
              keep them seperate
            </p>
          </div>
          <a target="_blank" rel="noreferrer" href="https://nickmeincken.me">
            Visit
          </a>
        </div>
      </PromoBlock>
    );
  }
};

export default Promo;
