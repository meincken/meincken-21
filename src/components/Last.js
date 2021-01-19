import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components";

const LastBlock = styled.div`
  column-count: 3;
  column-gap: 10px;
  margin: 2rem 0;

  p {
    display: none;
  }
`;

class Last extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allLastfmTrack

    return(
      <LastBlock>
        {posts &&
          posts.map(({ node: post }) => (
          <figure>
            <img
              src={post.image[3].text}
              key={post.image.size}
              alt={post.artist.name}
            />
            <p>{post.artist.name}: {post.album.name}</p>
            </figure>
        ))}
      </LastBlock>
    )
  }
}

Last.propTypes = {
  data: PropTypes.shape({
    allLastfmTrack: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        allLastfmTrack(limit: 9) {
          edges {
            node {
              image {
                text
                size
              }
              artist {
                name
              }
              album {
                name
                tracks {
                  name
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <Last data={data} />}
  />
)
