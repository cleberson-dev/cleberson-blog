import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import { getCategoryLocale } from "../../utils/locales/pt-br";
import { formatDate } from "../../utils/common";
import theme from "../../utils/theme";

import Layout from "../../components/Layout";
import SVGIcon from "../../components/SVGIcon";
import SEO from "../../components/seo";

import { 
  PostHeader, PostCategoryLabel, PostContent, PostDate, PostImage, PostTitle,
  ShareButtons, ShareContainer, ShareTitle
} from "./styles";

import facebookIcon from "../../images/icons/facebook.svg";
import twitterIcon from "../../images/icons/twitter.svg";





export default ({ data, location }) => {
  const post = data.markdownRemark;

  const currentURL = location.href;
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${post.frontmatter.title}&url=${currentURL}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentURL}&amp;src=sdkpreparse`
  };

  return (
    <>
      <SEO title={post.frontmatter.title} />
      <Layout>
        <main>
          <PostHeader>
            <PostImage>
              <Img fluid={data.imageSharp.fluid} />
            </PostImage>
            <PostCategoryLabel category={post.frontmatter.category}>
              {getCategoryLocale(post.frontmatter.category)}
            </PostCategoryLabel>
            <PostTitle>{post.frontmatter.title}</PostTitle>
            <PostDate datetime={post.frontmatter.date}>{formatDate(post.frontmatter.date)}</PostDate>
          </PostHeader>
          <PostContent>
            <div style={{ width: `100%` }} 
              dangerouslySetInnerHTML={{ __html: post.html }} 
            />
          </PostContent>
          <ShareContainer>
            <ShareTitle>Compartilhe a palavra!</ShareTitle>
            <ShareButtons>
              <a href={shareLinks.facebook} 
                target="_blank" rel="noopener noreferrer"
              >
                <SVGIcon src={facebookIcon} color={theme.colors.primary} alt='Facebook Share Button' />
              </a>
              <a href={shareLinks.twitter}
                target="_blank" rel="noopener noreferrer"
              >
                <SVGIcon src={twitterIcon} color={theme.colors.primary} alt='Twitter Share Button' />
              </a>
            </ShareButtons>
          </ShareContainer>
        </main>
      </Layout>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v5.0"></script>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        category
      }
      fields {
        slug
      }
    }
    imageSharp(fields: { slug: { eq: $slug } }) {
      fluid(maxWidth: 1280, maxHeight: 653, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;