import styled from "styled-components";
import { Link } from "gatsby";

import { getPostCategoryColor } from "../../utils/theme";
import { darkenHEX } from "../../utils/common";

export const PostItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
  min-height: 100px;
`;

export const PostInfoContainer = styled.div`
  width: 50%;
`;


export const PostTitleLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  max-height: 80%;
`;

export const PostTitle = styled.h4`
  grid-area: title;
  margin: 0;
  line-height: 1.4;
  max-height: 50%;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const PostDate = styled.small`
  grid-area: date;
  font-family: 'Roboto Slab', serif;
  font-size: 0.75rem;
  font-weight: 300;
  color: ${props => props.theme.colors.outro1};
  margin-top: 4px;

  &:hover {
    color: ${props => darkenHEX(props.theme.colors.outro1, 0.5)};
  }
`;

export const PostImage = styled.picture`
  grid-area: image;
  width: 50%;
  height: 100%;
  position: relative;
  margin-left: 10px;

  & > .gatsby-image-wrapper {
    margin: 0;
    width: 100%;
  }

  & > .gatsby-image-wrapper img {
    margin: 0;
  }
`;

export const PostCategoryLabel = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${props => getPostCategoryColor(props.category)};
  color: white;
  text-transform: uppercase;
  font-family: 'Roboto Sans', sans-serif; 
  font-weight: 700;
  font-size: 0.7rem;
  padding: 3px 8px;
`;