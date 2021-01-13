import React from 'react'

import Layout from '../../components/Layout'
import ArtRoll from '../../components/ArtRoll'

export default class ArtIndexPage extends React.Component {
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
            Art
          </h1>
        </header>
        <section>
          <ArtRoll />
        </section>
      </Layout>
    )
  }
}
