import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Global/";

function renderPhoto(item) {
  let photo = item.node;
  return (
    <figure key={photo.id}>
      <img src={photo.url_m} alt={photo.title} />
    </figure>
  );
}

export default class PhotoList extends React.Component {
  renderPagination() {
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage =
      currentPage - 1 === 1 ? "/photography/" : (currentPage - 1).toString();
    const nextPage = "/photography/" + (currentPage + 1).toString();

    return (
      <div>
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
      </div>
    );
  }

  render() {
    const photos = this.props.data.allFlickrPhoto.edges;
    return (
      <Layout>
        <section className="main photography">
          {photos.map(renderPhoto)}
        </section>
        <nav className="main">
          Page {this.props.pageContext.currentPage} of{" "}
          {this.props.pageContext.numPages}
          {this.renderPagination()}
        </nav>
      </Layout>
    );
  }
}

export const photoListQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allFlickrPhoto(
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: [dateupload_date] }
      filter: { media: { eq: "photo" } }
    ) {
      edges {
        node {
          id
          title
          url_m
          description
          photo_id
        }
      }
    }
  }
`;
