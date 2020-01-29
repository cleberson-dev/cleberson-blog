import React from "react";
import { PostsContainer, NoPostsContainer, NoPostsMessage } from "./styles";
import PostListItem from "../PostListItem";

export default ({ posts }) => (
  posts.length > 0 ? (
    <PostsContainer>
      {
        posts.map(post => (
          <PostListItem 
            key={post.id} 
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            category={post.frontmatter.category}
            fluidSharpImage={post.fluidSharpImage}
            link={post.fields.slug}
          />
        ))
      }
    </PostsContainer>
  ) : (
    <NoPostsContainer>
      <NoPostsMessage>Sem postagens!</NoPostsMessage>
    </NoPostsContainer>
  )
);