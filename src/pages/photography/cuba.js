import React from 'react';
import { graphql } from 'gatsby';
import styled from "styled-components";

import Layout from '../../components/Layout'

const Figure = styled.figure`
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;

  > img {
    grid-row: 1 / -1;
    grid-column: 1;
  }
`;

const Section = styled.section`
  column-count: 4;
  column-gap: 0.5rem;
`;

export default ({
  data: {
    allFlickrPhoto: { nodes: photos },
  },
}) => (
  <Layout>
    <Section>
      {photos.map(photo => (
        <Figure key={photo.id}>
          <img alt={photo.id} src={photo.url_o} />
        </Figure>
      ))}
    </Section>
  </Layout>
)


export const query = graphql`
  {
    allFlickrPhoto {
      nodes {
        id
        title
        url_o
      }
    }
  }
`
