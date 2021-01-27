import React from "react";
import styled from "styled-components";

const HRstyle = styled.hr`
  border-color: #2f2d2e;
  border-color: hsla(0, 0%, 58.8%, 0.1);
  margin: 18px auto 24px;
  width: 60%;
`;

export const HR = () => <HRstyle />;

const HeaderStyle = styled.div`
  h1 {
    color: #a9cc17;
    font-weight: 200;
    font-size: 80px;
    grid-column: span 2;
    line-height: 1;
    margin: 0;

    small {
      color: #e1e1e1;
      font-size: 65%;
      display: block;
    }
  }
`;

export const Header = ({ title, subtitle }) => (
  <HeaderStyle className="container">
    <h1>
      {title} <small>{subtitle}</small>
    </h1>
  </HeaderStyle>
);

const SectionStyle = styled.section`
  grid-column: main;
  padding: 2rem 0;
`;

export const Section = ({ children }) => (
  <SectionStyle>
    <div>{children}</div>
  </SectionStyle>
);
