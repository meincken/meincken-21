import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components";

const Insta = styled.div`
  column-count: 3;
  column-gap: 10px;
  margin: 2rem 0;
`;

class Instagram extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allInstaNode

    return(
      <Insta>
        {posts &&
          posts.map(({ node: post }) => (
            <figure>
            <img
              key={post.id}
              className={`insta`}
              alt={post.id}
              src={post.preview}
            />
            </figure>
        ))}
        <a href="https://instagram.com/meincken">Follow me on Instagram</a>
      </Insta>
    )
  }
}

Instagram.propTypes = {
  data: PropTypes.shape({
    allInstaNode: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        allInstaNode(limit: 9) {
          edges {
            node {
              id
              username
              preview
              thumbnails {
                src
              }
            }
          }
        }
      }
    `}
    render={(data) => <Instagram data={data} />}
  />
)
