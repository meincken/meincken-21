import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <>
        {posts &&
          posts.map(({ node: post }) => (
            <article
              key={post.id}
              className={`blog-entry ${
                post.frontmatter.featuredpost ? "is-featured" : ""
              }`}
            >
              <header>
                <p>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  <small>{post.frontmatter.date}</small>
                </p>
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null}
              </header>
              <p>{post.excerpt}</p>
              <Link to={post.fields.slug}>Keep Reading →</Link>
            </article>
          ))}
      </>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "L")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 150, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
