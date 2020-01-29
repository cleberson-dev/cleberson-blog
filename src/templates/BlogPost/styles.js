import styled from "styled-components";

import { getPostCategoryColor } from "../../utils/theme";

export const PostHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostImage = styled.picture`
  width: 100%;

  & > img {
    width: 100%;
    height: auto;
  }
`;

export const PostTitle = styled.h2`
  margin-bottom: 5px;
  text-align: center;
  width: 90%;
`;

export const PostDate = styled.time`
  display: block;
  color: ${props => props.theme.colors.outro1}; 
  font-weight: lighter;
`;

export const PostContent = styled.article`
  width: 100%;
  padding: 0 20px;
  margin-top: 20px;

  & a {
    text-decoration: none;
    color: #0775B5;
  }

  & p {
    font-weight: lighter;
    margin-bottom: 0.5rem;
  }

  & h1, & h2, & h3 {
    margin-top: 2rem;
    margin-bottom: 0.8rem;
  }

  & h1 {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  & h2 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  & h3 {
    font-size: 1.2rem;
    font-weight: normal;
  }

  & img {
    margin: 15px 0;
  }

  & ul {
    font-weight: lighter;
    margin-top: -15px;
    margin-left: 1.2rem;
  }

  & ul > li {
    margin-bottom: 5px;
  }

  & blockquote {
    padding: 15px;
    background-color: #F9F9F9;
    border-left-width: 3px;
    border-left-color: ${props => props.theme.colors.primary};
    border-left-style: solid;
    margin-left: 0;
    font-style: italic;
  }
`;

export const PostCategoryLabel = styled.label`
  margin-top: 25px;
  margin-bottom: 5px;
  background-color: ${props => getPostCategoryColor(props.category)};
  color: white;
  text-transform: uppercase;
  font-family: 'Roboto Sans', sans-serif; 
  font-weight: 700;
  font-size: 0.7rem;
  padding: 3px 8px;
`;

export const ShareContainer = styled.div`
  margin: 40px 0;
  padding: 0 20px;
`;

export const ShareTitle = styled.h4`
  margin-bottom: 10px;
`;

export const ShareButtons = styled.section`
  margin: 0;
  display: flex;

  & > a {
    height: 22px;
    margin: 0 5px;
  }

  & > a > svg {
    height: 100%;
    width: auto;
  }

  & > a > svg:hover {
    opacity: 0.85;
    transition: 0.1s ease-out;
  }
`;