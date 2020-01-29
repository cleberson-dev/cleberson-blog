import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import SVGIcon from "../SVGIcon";

import emailIcon from "../../images/icons/email.svg";
import githubIcon from "../../images/icons/github.svg";
import twitterIcon from "../../images/icons/twitter.svg";

import { FooterContainer, ContactButtons } from "./styles";




export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          contact {
            email
            github
            twitter
          }
        }
      }
    }
  `);

  const { contact } = data.site.siteMetadata;
  return (
    <FooterContainer>
      <ContactButtons>
        <a href={`mailto:${contact.email}`} 
          target="_blank" rel="noopener noreferrer"
        >
          <SVGIcon src={emailIcon} />
        </a>
        <a href={contact.github}
          target="_blank" rel="noopener noreferrer"
        >
          <SVGIcon src={githubIcon} />
        </a>
        <a href={contact.twitter}
          target="_blank" rel="noopener noreferrer"
        >
          <SVGIcon src={twitterIcon} />
        </a>
      </ContactButtons>
    </FooterContainer>
  );
}