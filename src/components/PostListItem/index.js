import React from "react";
import Img from "gatsby-image";

import { 
  PostItemContainer, PostInfoContainer, PostTitleLink, 
  PostTitle, PostDate, PostImage, PostCategoryLabel 
} from "./styles";

import { formatDate } from "../../utils/common";
import { getCategoryLocale } from "../../utils/locales/pt-br";





export default ({ title, date, category, link, fluidSharpImage }) => {
  return (
    <PostItemContainer>
      <PostInfoContainer>
        <PostTitleLink to={link}>
          <PostTitle>{ title }</PostTitle>
        </PostTitleLink>
        <PostDate>{ formatDate(date) }</PostDate>
      </PostInfoContainer>
      <PostImage>
        <Img fluid={fluidSharpImage} />
        <PostCategoryLabel category={category}>{ getCategoryLocale(category) }</PostCategoryLabel>
      </PostImage>
    </PostItemContainer>
  );
}