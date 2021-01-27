import React from "react";
import Insta from "./Insta";
import Goodreads from "./Goodreads";
import Last from "./Last";
import styled from "styled-components";
import { color } from "../../shared/styles";

const SocialBlock = styled.div`
  background-color: ${color.dark};
  border-top: 1px solid ${color.primary};
  border-bottom: 1px solid ${color.primary};
  grid-column: full;

  > section {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    padding: 2rem 0;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

const Social = class extends React.Component {
  render() {
    return (
      <SocialBlock className="social-section">
        <section>
          <Insta />
          <Goodreads />
          <Last />
        </section>
      </SocialBlock>
    );
  }
};

export default Social;
