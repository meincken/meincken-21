import React from 'react'
import Insta from '../components/Insta'
import Goodreads from '../components/Goodreads'
import Last from '../components/Last'
import styled from "styled-components";

const SocialBlock = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
`;

const Social = class extends React.Component {
  render() {
    return (
      <SocialBlock className="main">
        <Insta />
        <Goodreads />
        <Last />
      </SocialBlock>
    )
  }
}

export default Social
