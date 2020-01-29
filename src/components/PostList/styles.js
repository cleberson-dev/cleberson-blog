import styled from "styled-components";

export const PostsContainer = styled.nav`
  grid-row-gap: 40px;
  width: 100%;
  margin: 40px 0;
  padding: 0 20px;
`;

export const NoPostsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoPostsMessage = styled.h1`
  color: white;
  background-color: ${props => props.theme.colors.primary};
  font-weight: 900;
  text-transform: uppercase;
  padding: 10px 10px;
  text-align: center;
  width: fit-content;
`;