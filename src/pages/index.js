import React, { useState } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Menu from "../components/Menu";
import PostList from "../components/PostList";
import SEO from "../components/SEO";

import { 
  getPostsOutOfMarkdownRemarks, getPostImages, 
  filterPostsByCategory 
} from "../utils/common";



export default ({ data }) => {
  const [filterOption, setFilterOption] = useState(`all`);

  // Posts devem seguir uma estrutura em pastas e somente eles devem ser usados
  const markdownRemarkNodes = data.allMarkdownRemark.edges.map(({ node }) => node);
  const allPosts = getPostsOutOfMarkdownRemarks(markdownRemarkNodes);

  const filteredPosts = (filterOption === `all`) ?
    allPosts : filterPostsByCategory(allPosts, filterOption);
  
  // Imagens são recuperadas separadas de postagens, sendo necessário juntá-las posteriormente
  const imageSharpNodes = data.allImageSharp.edges.map(({ node }) => node);
  const postImages = getPostImages(imageSharpNodes);
  const postsWithImage = filteredPosts.map((post) => ({
      ...post,
      fluidSharpImage: postImages.find((postImage) => (
        postImage.parent.relativeDirectory === post.parent.relativeDirectory
      )).fluid
    }));

  // Consumível para o <Menu /> com o filtro de categorias
  const postCategories = allPosts
    .map(post => post.frontmatter.category)
    .filter(category => !!category); // Pode haver valores 'falsy'

  return (
    <>
    <SEO title="Início" />
    <Layout>
      <Menu
        options={[`all`, ...new Set(postCategories)]}
        onChangeHandler={(e) => setFilterOption(e.target.value)}
        postsCount={filteredPosts.length}
      />
       <PostList posts={postsWithImage} />
    </Layout>
    </>
  ); 
}


export const query = graphql`
 query AllPostsQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        parent {
          ... on File {
            base
            sourceInstanceName
            relativeDirectory
          }
        }
        frontmatter {
          title
          date
          category
        }
        fields {
          slug
        }
      }
    }
  }
  allImageSharp {
    edges {
      node {
        parent {
          ... on File {
            name
            sourceInstanceName
            relativeDirectory     
          }
        }
        fluid(maxWidth: 1280, maxHeight: 653, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}
`;