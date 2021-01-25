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
          }}
        >
          <h2>Latest Stories</h2>
        </header>
        <section>
          <BlogRoll />
        </section>
      </Layout>
    );
  }
}
