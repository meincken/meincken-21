import React from 'react'
import styled from "styled-components"
import { color } from "../shared/styles";

const GoodreadBlock = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 2rem 0;

  img {
    width: 50%;
  }

  p {
    color: ${color.lightest};
    font-size: 1.4rem;
  }
  span {
    display: block;
  }
`;

const Goodreads = class extends React.Component {
  render() {
    return (
      <GoodreadBlock>
        <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1335873471l/49627.jpg" alt="49627" />
        <p>
          <span className="title">
            Title: Sprouts of Wrath
          </span>
          <span className="author">
            Author: Robert Rankin
          </span>
        </p>
      </GoodreadBlock>
    )
  }
}

export default Goodreads;
