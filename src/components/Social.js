import React from 'react'
import Insta from '../components/Insta'
import Goodreads from '../components/Goodreads'
import Last from '../components/Last'
import styled from "styled-components";
import { color } from "../shared/styles";

const SocialBlock = styled.div`
  background-color: ${color.dark};
  border-top: 1px solid ${color.primary};

  > section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    padding: 2rem 0;
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
    )
  }
}

export default Social
