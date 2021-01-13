import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <header
          className="full-width-image"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1>
            Latest Stories
          </h1>
        </header>
        <section>
          <BlogRoll />
        </section>
      </Layout>
    )
  }
}
