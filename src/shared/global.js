import { createGlobalStyle, css } from "styled-components";
import { color, typography } from "./styles";

export const fontUrl =
  "https://fonts.googleapis.com/css2?family=Lato:wght@100;400;900&display=swap";

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}rem;
  font-weight: ${typography.weight.regular};
  background: ${color.lightest};
  color: ${color.darkest};
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

  .social-section,
  main {
    display: grid;
    grid-template-columns:
      [full-start] minmax(2rem, 1fr)
      [main-start] minmax(0, 117rem) [main-end]
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
      color: ${color.lighter};
      display: flex;
      flex-flow: column;
      height: 50vh;
      justify-content: center;
      min-height: 50rem;
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
    padding: 2rem 0;

    > header {
      grid-column: span 3;
      text-align: center;
      font-size: 3.5rem;
      text-transform: uppercase;
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

      header {
        text-align: left;
      }

      p {
        font-size: 1.4rem;
        flex-grow: 1;
      }
    }
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
