import React from "react";

import Layout from "../../components/Global/";
import BlogRoll from "../../components/BlogRoll/";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <header
          className="full-width-image"
          style={{
            backgroundImage: `url('/img/blog-hero.jpg')`,
            backgroundPosition: `bottom center`,
            backgroundAttachment: `fixed`,
          }}
        >
          <h1>Latest Stories</h1>
        </header>
        <section>
          <BlogRoll />
        </section>
      </Layout>
    );
  }
}
