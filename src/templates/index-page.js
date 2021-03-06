import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Global/";
import BlogRoll from "../components/BlogRoll/";
import Promo from "../components/PromoBlock";
import { Section } from "../shared/ui-kit";

export const IndexPageTemplate = ({ image, title, subtitle, mainpitch }) => (
  <>
    <header
      className="hero-image full-width-image"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2>
        {title} <small>{subtitle}</small>
      </h2>
    </header>

    <Section>
      <h1 className="title">{mainpitch.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: mainpitch.description }} />
    </Section>

    <Promo />

    <section className={`latest-entries`}>
      <div>
        <header>
          <h3>Latest stories</h3>
        </header>
        <section>
          <BlogRoll />
        </section>
        <footer>
          <Link className="btn" to="/blog">
            Read more
          </Link>
        </footer>
      </div>
    </section>
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  mainpitch: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        mainpitch={frontmatter.mainpitch}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainpitch {
          title
          description
        }
      }
    }
  }
`;
