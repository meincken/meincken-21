import React from 'react'
import styled from "styled-components"

const GoodreadBlock = styled.div`
  .gr_custom_container_1611136591 {
    padding: 10px 5px 10px 5px;
    background-color: #FFFFFF;
    color: #000000;
  }
  .gr_custom_header_1611136591 {
    /* customize your Goodreads header here*/
    width: 100%;
    margin-bottom: 5px;
    text-align: center;
    font-size: 120%
  }
  .gr_custom_each_container_1611136591 {
    /* customize each individual book container here */
    width: 100%;
    clear: both;
    margin-bottom: 10px;
    overflow: auto;
    padding-bottom: 4px;
    border-bottom: 1px solid #aaa;
  }
  .gr_custom_book_container_1611136591 {
    /* customize your book covers here */
    overflow: hidden;
    height: 160px;
    float: right;
    margin-left: 4px;
    width: 98px;
  }
  .gr_custom_author_1611136591 {
    /* customize your author names here */
    font-size: 10px;
  }
  .gr_custom_tags_1611136591 {
    /* customize your tags here */
    font-size: 10px;
    color: gray;
  }
  .gr_custom_rating_1611136591 {
    float: right;
  }
`;

const Goodreads = class extends React.Component {
  render() {
    return (
      <GoodreadBlock>
        <div id="gr_custom_widget_1611136591">
          <div className="gr_custom_container_1611136591">
            <h2 className="gr_custom_header_1611136591">
              <a rel="nofollow" href="https://www.goodreads.com/review/list/60144475-nick-meincken?shelf=currently-reading&amp;utm_medium=api&amp;utm_source=custom_widget">
                Currently reading
              </a>
            </h2>
          </div>
        </div>
        <script src="https://www.goodreads.com/review/custom_widget/60144475.Nick's%20bookshelf:%20currently-reading?cover_position=right&cover_size=medium&num_books=5&order=a&shelf=currently-reading&show_author=1&show_cover=1&show_rating=0&show_review=0&show_tags=0&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1611136591&widget_text_color=000000&widget_title_size=medium&widget_width=medium" type="text/javascript" charSet="utf-8"></script>
      </GoodreadBlock>
    )
  }
}

export default Goodreads;
