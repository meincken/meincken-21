import React from 'react'
import Insta from '../components/Insta'
import Last from '../components/Last'
import styled from "styled-components";

const SocialBlock = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Social = class extends React.Component {
  render() {
    return (
      <SocialBlock className="main">
        <Insta />
        <Last />
      </SocialBlock>
    )
  }
}

export default Social
