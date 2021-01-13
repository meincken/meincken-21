import React from 'react';
import Layout from '../../components/Layout'
import { Link } from 'gatsby';

export default class PhotoList extends React.Component {
  render() {
    return (
      <Layout>
        <Link to="/photography/cuba">Cuba</Link>
          <a data-flickr-embed="true" data-header="true" data-footer="true" href="https://www.flickr.com/photos/meincken/albums/72157679672734381" title="Moscow">
            <img src="https://live.staticflickr.com/2874/32732422983_3267bd9e45_z.jpg" width="800" height="600" alt="Moscow" />
          </a>

          <script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
      </Layout>
    );
  }
}
