import { createGlobalStyle, css } from "styled-components";
import { color, typography } from "./styles";

export const fontUrl =
  "https://fonts.googleapis.com/css2?family=Lato:wght@100;400;900&display=swap";

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}rem;
  font-weight: ${typography.weight.regular};
  background: ${color.darkest};
  color: ${color.lighter};
  height: 100%
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
  }

  main {
    padding-top: 6.9rem;
  }

  .social-section,
  main {
    display: grid;
    grid-template-columns:
      [full-start] minmax(2rem, 1fr)
      [main-start] minmax(0, 96rem) [main-end]
      minmax(2rem, 1fr) [full-end];

    .main,
    > section {
      grid-column: main;

      &.section-about {
        margin: 0 auto;
        max-width: 70rem;
      }
    }

    > .full-width-image {
      align-items: center;
      background-attachment: fixed;
      background-position: center center;
      background-size: contain;
      color: ${color.lighter};
      display: flex;
      filter: grayscale(100%);
      flex-flow: column;
      height: 50vh;
      justify-content: center;
      min-height: 50rem;

      @media (min-width: 768px) {
        background-size: cover;
      }

      h2 {
        font-size: 3.5rem;
        text-align: center;
        text-shadow: 1px 1px 1px rgb(0 0 0);
      }
    }
  }

  #gatsby-focus-wrapper {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
  }

  .full-width-image {
    grid-column: full;
  }

  .hero-image {
    h2 {
      font-size: 3.5rem;
      text-align: center;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);

      small {
        display: block;
        font-size: 65%;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.regular};
    margin: 0;
    padding: 0;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: ${typography.type.primary};
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b,
  em {
    font-weight: ${typography.weight.bold};
  }

  hr {
    border: none;
    border-top: 1px solid ${color.border};
    clear: both;
    margin-bottom: 1.25rem;
  }

  code,
  pre {
    font-family: ${typography.type.code};
    font-size: ${typography.size.s2 - 1}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    display: inline-block;
    padding-left: 2px;
    padding-right: 2px;
    vertical-align: baseline;

    color: ${color.secondary};
  }

  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;

    background: rgba(0, 0, 0, 0.05);
    color: ${color.darkest};
    border-radius: 3px;
    margin: 1rem 0;
  }

  a {
    color: ${color.primary};
    transition: all 1s;

    &:hover {
      color: ${color.primarylighten};
    }
  }

  p {
    font-size: ${typography.size.base}rem;
    line-height: 1.5;
    margin-top: 0;
  }

  ul {
    padding: 0;
  }

  img {
    max-width: 100%;
    display: block;
    filter: grayscale(100%);
    transition: 1s;

    &:hover {
      filter: grayscale(0);
    }
  }

  figure {
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;

    > img {
     grid-row: 1 / -1;
     grid-column: 1;
   }
  }

  .photography {
    column-count: 4;
    column-gap: 10px;
    margin: 2rem 0;
  }

  .section-about {
    p img {
      display: inline-block;
    }
  }

  .latest-entries {
    background-color: ${color.lighter};
    color: ${color.dark};
    grid-column: full;
    padding: 2rem;

    @media (min-width: 768px) {
      grid-column: full;
      padding: 2rem 0;
    }

    > div {
      margin: 0 auto;
      max-width: 96rem;

      > header {
        grid-column: span 3;
        text-align: center;
        font-size: 3.5rem;
        text-transform: uppercase;
      }

      > section {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 1fr;


        @media (min-width: 768px) {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
    }


    a {
      text-decoration: none;

      + small {
        display: block;
      }
    }

    footer {
      grid-column: span 3;
      padding-top: 2rem;
    }

    .blog-entry {
      display: flex;
      flex-flow: column;
      justify-content: space-between;

      header p {
        font-size: 1.4rem;
        text-align: left;
      }

      .post-content {
        flex-grow: 1;

        p {
          font-size: 1.4rem;
        }
      }
    }
  }

  .visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
`;

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    ${bodyStyles}
  }
`;
