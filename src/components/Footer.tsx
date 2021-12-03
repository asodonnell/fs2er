import React from "react";
import styled from "styled-components";

const ParentFooter = styled.div`
  margin: 20px 0 20px 0;
`;

const FooterText = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  font-size: 0.8rem;
  color: #a9a9a9;
  a {
    color: #909090;
  }
`;

const Footer = () => (
  <ParentFooter>
    <FooterText>
      <em>
        Source: Licensed from Public Transport Victoria under a Creative Commons
        Attribution 4.0 International Licence.
      </em>
    </FooterText>
    <FooterText>
      <br />
      Developed by
      <br />
      <a href="https://github.com/asodonnell/fs2er/pulls?q=is%3Apr+author%3Aasodonnell">
        Alex
      </a>{" "}
      +{" "}
      <a href="https://github.com/asodonnell/fs2er/pulls?q=is%3Apr+author%3Ajian-ong">
        Jian
      </a>{" "}
      +{" "}
      <a href="https://github.com/asodonnell/fs2er/pulls?q=is%3Apr+author%3Archprk">
        Rachael
      </a>
      .
    </FooterText>
  </ParentFooter>
);

export default Footer;
