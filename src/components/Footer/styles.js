import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 40px 20px;
  box-sizing: content-box;

  & > h4 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
`;

export const ContactButtons = styled.address`
  display: flex;
  margin: 0;
  justify-content: center;

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